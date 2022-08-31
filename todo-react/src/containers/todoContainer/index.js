import React, { useState } from "react";
import AddTodo from "../../components/addTodo";
import Todo from "../../components/todoList";

const TodoContainer = () => {
  
  const [todoList, setTodoList] = useState([
    { id: 1, title: "abc" },
    { id: 2, title: "xyz" },
  ]);
  const [todos, setTodos]=useState(todoList)
  const handleAddTodo=(newTodo)=>{
    const newTodoList=[...todos,newTodo]
    setTodos(newTodoList)
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

  return (
    <div>
      <h2 align="left"> Todo App </h2>{" "}
      {todos.map((todo) => (
        <Todo todo={todo} handleChange={handleCheckboxChange} />
      ))}
      <AddTodo addTodo={handleAddTodo}/>
    </div>
  );
  
};
export default TodoContainer;
