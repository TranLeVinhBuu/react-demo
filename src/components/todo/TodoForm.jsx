const TodoForm = (props) => {
  // const {addNewTodo} = props;
  // addNewTodo('clowder')

  const handleClick = () => {
    console.log('clicked')
  }

  const handleChange = (e) => {
    console.log('handle change', e)
  }

  return (
     <div className="todo-form">
        <input type="text"
        onChange={(event) => handleChange(event.target.value) }/>
        <button 
        style={{cursor: "pointer"}}
        onClick={handleClick}
        >Add</button>
      </div>
  )
}

export default TodoForm;