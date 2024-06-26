import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import TodoPage from './Pages/TodoPage/TodoPage';
import Home from './Pages/HomePage/Home';
import ProductManager from './Pages/ProductManagerPage/ProductManager';
import Quotes from './Pages/QuotesPage/Quotes';
import ExpenseTracker from './Pages/ExpenseTrackerPage/ExpenseTracker';
import Login from './Pages/LoginPage/Login';
import SignUp from './Pages/SignUpPage/SignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/todo' element={<PrivateRoute Component={TodoPage} />} />
        <Route path='/productmanager' element={<PrivateRoute Component={ProductManager} />} />
        <Route path='/quotes' element={<PrivateRoute Component={Quotes} />} />
        <Route path='/expensetracker' element={<PrivateRoute Component={ExpenseTracker} />} />
      </Routes>
    </div>
  );
}

export default App;
