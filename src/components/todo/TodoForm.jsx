import React, { useState } from 'react';

const TodoForm = (props) => {
  const {addNewTodo} = props;

  const [valueInput, setValueInput] = useState('')

  const handleClick = () => {
    addNewTodo(valueInput)
  }

  const handleChange = (e) => {
    console.log('handle change', e)
    setValueInput(e)
  }

  return (
     <div className="todo-form">
        <input type="text"
        onChange={(event) => handleChange(event.target.value) }/>
        <button 
        style={{cursor: "pointer"}}
        onClick={handleClick}
        >Add</button>
        <div>{valueInput}</div>
      </div>
  )
}

export default TodoForm;