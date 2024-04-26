import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import TodoPage from './Pages/TodoPage/TodoPage';
import Home from './Pages/HomePage/Home';
import ProductManager from './Pages/ProductManagerPage/ProductManager';
import Quotes from './Pages/QuotesPage/Quotes';
import ExpenseTracker from './Pages/ExpenseTrackerPage/ExpenseTracker';
import Login from './Pages/LoginPage/Login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todo' element={<TodoPage />} />
        <Route path='/productmanager' element={<ProductManager />} />
        <Route path='/quotes' element={<Quotes />} />
        <Route path='/expensetracker' element={<ExpenseTracker />} />
      </Routes>
    </div>
  );
}

export default App;
