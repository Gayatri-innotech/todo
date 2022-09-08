import React, { useState } from "react";
import AddTodo from "../../components/addTodo";
import Todo from "../../components/todoList";

const TodoContainer = () => {
  
  const [todoList, setTodoList] = useState([
    { id: 1, title: "abc" },
    { id: 2, title: "xyz" },
  ]);
  
  const handleAddTodo=(newTodo)=>{
    const newTodoList=[...todoList,newTodo]
    setTodoList(newTodoList)
    console.log(newTodo);
    console.log(newTodoList);
  };
  
  const handleCheckboxChange = (id) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) return { ...todo, done: !todo.done };
      return todo;
    });
    setTodoList(newTodoList);
    console.log(newTodoList);
  };

  const handleRemoveTodo =(id)=>{
    const newTodoList= todoList.filter(todo=>todo.id!==id)
    setTodoList(newTodoList)
  }

  return (
    <div>
      <h2 align="left"> Todo App </h2>{" "}
      {todoList.length>0?todoList.map((todo) => (
        <Todo todo={todo} handleChange={handleCheckboxChange} removeTodo ={handleRemoveTodo}/>
        
      )):<p align="center">No Todos Left</p>}

      <AddTodo addTodo={handleAddTodo}/>
    </div>
  );
  
};
export default TodoContainer;
