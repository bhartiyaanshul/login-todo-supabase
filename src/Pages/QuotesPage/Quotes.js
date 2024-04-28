import React, { useEffect, useState } from 'react'
import './Quotes.css'

const Quotes = () => {
    const [quotes, setQuotes] = useState([])
    function getQuote() {
        fetch('https://api.quotable.io/quotes/random?limit=50')
            .then(response => response.json())
            .then(data => {
                setQuotes(data)
            })
    }

    function getQuoteByAuthor(author) {
        fetch(`https://api.quotable.io/quotes?author=${author}`)
            .then(response => response.json())
            .then(data => {
                setQuotes(data.results)
            })
    }

    function getQuoteByTag(tag) {
        fetch(`https://api.quotable.io/quotes?tags=${tag}`)
            .then(response => response.json())
            .then(data => {
                setQuotes(data.results)
            })
    }

    useEffect(() => {
        getQuote()
    }, [])
    return (
        <div className='quote-app'>
            {
                quotes.map(quote => {
                    return (
                        <div key={quote._id} className='quote-container'>
                            <h3>{quote.content}</h3>
                            <div className='qoute-details'>
                                <div className='tags'>
                                    {
                                        quote.tags.map(tag => {
                                            return (
                                                <span key={tag} className='tag' onClick={() => {
                                                    getQuoteByTag(tag)
                                                }}>{tag}</span>
                                            )
                                        })
                                    }
                                </div>
                                <div className='author' onClick={() => {
                                    getQuoteByAuthor(quote.author)
                                }}>
                                    {quote.author}
                                </div>
                            </div>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Quotes