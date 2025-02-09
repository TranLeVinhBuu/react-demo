import './components/todo/todo.css';
import TodoForm from './components/todo/TodoForm';
import TodoData from './components/todo/TodoData';
import ReactLogo from './assets/react.svg';
import React, { useState } from 'react';



const App = () => {
  const [todoList, setTodoList] = useState([]);

  const name = 'John Doe';
  const age = 30;
  const data = ['Learning React', 'Watching Youtube'];


  const addNewTodo = (name) =>{
    const newTodo = {
      id: randomIntFromInterval(1, 1000),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoForm
        addNewTodo = {addNewTodo} />
      <TodoData 
        name = {name}
        age = {age}
        data = {data}
        todoList = {todoList} />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' alt="React Logo" />
      </div>
    </div>
  );
}

export default App;