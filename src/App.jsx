import './components/todo/todo.css';
import TodoForm from './components/todo/TodoForm';
import TodoData from './components/todo/TodoData';
import ReactLogo from './assets/react.svg';



const App = () => {
  const name = 'clowder';
  const age = 20;
  const data ={
    address: 'TPHCM',
    phone: '0123456789'
  }

  const addNewTodo = (name) =>{
    alert(`call me ${name}`);
  }

  return (
    <div className="todo-container">
      <div className="todo-title">Todo list</div>
      <TodoForm
        addNewTodo = {addNewTodo} />
      <TodoData 
        name = {name}
        age = {age}
        data = {data} />
      <div className='todo-image'>
        <img src={ReactLogo} className='logo' alt="React Logo" />
      </div>
    </div>
  );
}

export default App;