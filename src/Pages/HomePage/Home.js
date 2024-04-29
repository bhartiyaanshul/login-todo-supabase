import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='app'>
            <h1>Pages</h1>
            <div className='examples'>
                <div className='example'>
                    <h2>Todo</h2>
                    <p>Simple todo list</p>
                    <Link to='/todo'>Go to Todo</Link>
                </div>
                <div className='example'>
                    <h2>Expense Tracker</h2>
                    <p>Simple expense tracker</p>
                    <Link to='/expensetracker'>Go to Expense Tracker</Link>
                </div>
                <div className='example'>
                    <h2>Product Management</h2>
                    <p>Simple product management</p>
                    <Link to='/productmanager'>Go to Product Management</Link>
                </div>
                <div className='example'>
                    <h2>Quote</h2>
                    <p>Random quotes</p>
                    <Link to='/quotes'>Go to Quote</Link>
                </div>
            </div>
        </div>
    )
}

export default Home