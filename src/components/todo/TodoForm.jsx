const TodoForm = (props) => {
  const {addNewTodo} = props;
  addNewTodo('clowder')
  return (
     <div className="todo-form">
        <input type="text"/>
        <button>Add</button>
      </div>
  )
}

export default TodoForm;