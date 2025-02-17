import "./todo.css";
import TodoForm from "./TodoForm";
import TodoData from "./TodoData";
import ReactLogo from "../../assets/react.svg";
import React, { useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name,
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  };

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoForm addNewTodo={addNewTodo} />

      {todoList.length > 0 ? (
        <TodoData todoList={todoList} deleteTodo={deleteTodo} />
      ) : (
        <div className="todo-image">
          <img src={ReactLogo} className="logo" alt="React Logo" />
        </div>
      )}
    </div>
  );
};

export default TodoApp;
