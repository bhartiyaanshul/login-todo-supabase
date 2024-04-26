import React, { useState } from 'react'
import "./Login.css"

function Login() {

    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePassword(e){
        setPassword(e.target.value)
    }

  return (
    <div>
        <div className='content-container'>
            <div className='signin-container'>
                <div className='sign-in-text'>Sign In</div>
                <input type='text' onChange={handleEmail} value={email} placeholder='Email or Phone'></input>
                <input type='password' onChange={handlePassword} value={password} placeholder='Password'></input>
                <button type='submit' >LOGIN</button>
            </div>
        </div>
    </div>
  )
}

export default Login