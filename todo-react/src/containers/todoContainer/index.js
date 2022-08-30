import React, { useState } from "react";
import Todo from "../../components/todoList";

const TodoContainer = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "abc" },
    { id: 2, title: "xyz" },
  ]);
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
      {todoList.map((todo) => (
        <Todo todo={todo} handleChange={handleCheckboxChange} />
      ))}
    </div>
  );
};
export default TodoContainer;
