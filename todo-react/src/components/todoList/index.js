import React from "react";

const Todo = ({ todo, handleChange }) => {
    console.log(todo)
    const handleCheckboxChange = () => {
        if (todo.done)
            return null;
        handleChange(todo.id)
    }
    return ( < div class = "box" >
        <input type = "checkbox" style = {{ margin: "7px 1px 0 9px" }}checked = { todo.done }onChange = {() => { handleChange(todo.id) }}/>
        <span style = { { padding: "0 2px" }} > { todo.title } </span>  
    <span style = {{ margin: "0 0 0 1300px", background: "lightgrey", borderRadius: "25px",}} > {todo.done ? "completed" : "" } </span>
    </div>
)
}
export default Todo
