import React, { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import './TodoPage.css'

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_KEY)

function TodoPage() {

    const [ todos, setTodos] = useState([])
    const [ title, setTitle] = useState('')
    const [ task, setTask] = useState('')
    const [ session, setSession] = useState('')

    async function getUser() {

        const { data, error } = await supabase.auth.getSession()
        const { session } = data
        if(session){
            const {access_token} = session
            console.log(access_token)
            setSession(access_token)
        }
    }

    useEffect(() => {
        getUser()
        if (session)
            fetchData()
    },[session])

    async function fetchData(){
        await fetch('http://localhost:3000/post/',
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': " "+ session
            }
        })
        .then(response => response.json())
        .then(data => setTodos(data))
    }

    function handleTitle(e){
        setTitle(e.target.value)
    }

    function handleTask(e){
        setTask(e.target.value)
    }

    function addTodo(){
        fetch('http://localhost:3000/post/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': " "+ session
            },
            body: JSON.stringify({
                title: title,
                task: task
            })
        })
        .then(response => response.json())
        .then(data => {
            fetchData()

            setTask('')
            setTitle('')
        })

        
    }

    function onDelete(id){
        fetch(`http://localhost:3000/post/?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': " "+ session
            }
        })
        .then(response => response.json())
        fetchData()
    }


        

  return (
    <div>
        <div className='header'>TODO APP</div>
        <div className='add-container'>
            <input type="text" placeholder="Title" onChange={handleTitle}/>
            <input type="text" placeholder="Task" onChange={handleTask}/>
            <button onClick={addTodo}>Add Todo</button>
        </div>
        <div className='todos-container'>
            {todos.map(todo => (
                <div className='todo-container' key={todo.id}>
                    <div className='todos-title'>{todo.title}</div>
                    <div className='todos-task'>{todo.task}</div>
                    <button onClick={() => onDelete(todo.id)}>Delete</button>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default TodoPage