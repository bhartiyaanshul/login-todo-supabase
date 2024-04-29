import { createClient } from '@supabase/supabase-js'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const supabase = createClient('https://jqsqjrcaxnxjrqennhmk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impxc3FqcmNheG54anJxZW5uaG1rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1MTI3MjEsImV4cCI6MjAyOTA4ODcyMX0.19Y3Zjd72vKn6S9Us2djfjj7BUDSkkqBwbu6j8y2ug4')

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