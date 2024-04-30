import React, { useState } from 'react'
import "./Login.css"
import { useNavigate, Link } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => setEmail(e.target.value)

    const handlePassword = (e) => setPassword(e.target.value)

    async function handleLogin() {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })
        console.log(error)

        if (!data.user) {
            alert('Invalid login credentials')
        }
        else {
            navigate("/")
        }
    }

    return (
        <div>
            <div className='content-container'>
                <div className='signin-container'>
                    <div className='sign-in-text'>Sign In</div>
                    <input type='text' onChange={handleEmail} value={email} placeholder='Email' required></input>
                    <input type='password' onChange={handlePassword} value={password} placeholder='Password'></input>
                    <button type='submit' onClick={handleLogin} >LOGIN</button>
                    <div>Don't have Account? <Link to='/signup'>SignUp</Link></div>
                </div>
            </div>
        </div>
    )
}

export default Login