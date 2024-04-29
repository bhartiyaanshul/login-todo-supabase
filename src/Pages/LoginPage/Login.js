import React, { useState } from 'react'
import "./Login.css"
import { useNavigate, Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://jqsqjrcaxnxjrqennhmk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxc3FqcmNheG54anJxZW5uaG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1MTI3MjEsImV4cCI6MjAyOTA4ODcyMX0.19Y3Zjd72vKn6S9Us2djfjj7BUDSkkqBwbu6j8y2ug4')

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // let user = false
    // const [ token, setToken] = useState();

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    async function handleLogin() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        console.log(error)

        if(!data.user){
            alert('Invalid login credentials')
        }
        else{
            navigate("/")
        }
    }

    return (
        <div>
            <div className='content-container'>
                <div className='signin-container'>
                    <div className='sign-in-text'>Sign In</div>
                    <input type='text' onChange={handleEmail} value={email} placeholder='Email'></input>
                    <input type='password' onChange={handlePassword} value={password} placeholder='Password'></input>
                    <button type='submit' onClick={handleLogin} >LOGIN</button>
                    <div>Don't have Account? <Link to='/signup'>SignUp</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login