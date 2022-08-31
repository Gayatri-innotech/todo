import React, {useState} from 'react'
import './style.css';

const AddTodo =({addTodo})=>{
    const [title,setTitle]=useState()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newTodo={id:Math.random(), title:title}
        addTodo(newTodo)
        setTitle("")
    }

    return (<div>
        <form onSubmit={handleSubmit}>
            <h3>Todo</h3>
            <input id="bar" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Your Todo" required/>
            <input id="ent" type="submit"/>
        </form>
    </div>)
}
export default AddTodo;