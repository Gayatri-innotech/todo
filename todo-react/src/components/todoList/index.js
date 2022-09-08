import React from "react";
import './style.css';

const Todo = ({ todo, handleChange,removeTodo }) => {
    console.log(todo)
    const handleCheckboxChange = () => {
        if (todo.done)
            return null;
        handleChange(todo.id)
    }
    return ( < div class = "box" >
        <input type = "checkbox" style = {{ margin: "7px 1px 0 9px" }}checked = { todo.done }onChange = {() => { handleChange(todo.id) }}/>
        <span style = { { padding: "0 2px" }} > { todo.title } </span>  
    <span class="uma" > {todo.done ? "completed" : "" } </span>
    <span class="del" style={{right: 20}} onClick={()=>removeTodo(todo.id)}>X</span>
    </div>
)
}
export default Todo