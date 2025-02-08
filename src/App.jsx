import './components/todo/todo.css';
import TodoForm from './components/todo/TodoForm';
import TodoData from './components/todo/TodoData';
import ReactLogo from './assets/react.svg';

const App = () => {
  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoForm />
      <TodoData />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' alt="React Logo" />
      </div>
    </div>
  );
}

export default App;