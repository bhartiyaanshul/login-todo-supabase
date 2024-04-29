import React, { useState } from 'react'
import "./ExpenseTracker.css"
import image from "./image.jpg"

function ExpenseTracker() {

    const [transactions, setTransactions] = useState([])
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState()
    const [balance, setBalance] = useState(500)


    function handleTitle(e) {
        setTitle(e.target.value)
    }

    function handleAmount(e) {

        setAmount(e.target.value)

    }

    function handleInExpense(e) {
        if (title === '' || amount === "") {
            alert("Required fields are empty")
            return;
        }

        setTransactions([...transactions, { title: title, amount: amount, type: "in" }])

        setBalance((val) => {
            return (val + parseInt(amount))
        })

        setTitle("")
        setAmount("")
    }

    function handleOutExpense(e) {
        // if(title === ''){
        //     alert("Title Field is empty")
        //     return;
        // }
        // if(amount === ''){
        //     alert("Amount Field is empty")
        //     return;
        // }
        if (title === "" || amount === "") {
            alert("Required fields are empty")
            return;
        }
        setTransactions([...transactions, { title: title, amount: amount, type: "out" }])

        setBalance((val) => {
            return (val - parseInt(amount))
        })

        setTitle("")
        setAmount("")
    }

    return (
        <div className='App'>
            <div className='content'>
                <div className='add-container'>
                    <div className='row'>
                        <input type="text" value={title} onChange={handleTitle} placeholder='title'></input>
                        <button className='button in' type="submit" onClick={handleInExpense}>IN</button>
                    </div>
                    <div className='row'>
                        <input type='text' value={amount} onChange={handleAmount} placeholder='amount'></input>
                        <button className='button out' type="submit" onClick={handleOutExpense}>OUT</button>
                    </div>
                </div>
                <div className='transaction-container'>
                    {
                        transactions.map((item, index) => {
                            return (
                                <div key={index} className={`balance-type ${item.type}`}>
                                    <span>{item.title}</span>
                                    <span>{item.amount}</span>
                                </div>)
                        })
                    }
                </div>
            </div>
            <div className='sidebar'>
                <img className='avatar' src={image} alt=''/>
                <div className='balance'>${balance}</div>
            </div>
        </div>
    )
}

export default ExpenseTracker