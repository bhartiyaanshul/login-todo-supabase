import { createClient } from '@supabase/supabase-js'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)

const PrivateRoute = (props) => {
    const navigate = useNavigate()

    const {Component} = props

    async function getUser(){
        const { data: { user } } = await supabase.auth.getUser()
        if(!user){
            navigate('/login')
        }
    }

    useEffect(()=>{
        getUser()
        
    })
    return(
        <div>
            <Component/>
        </div>
    )

}

export default PrivateRoute