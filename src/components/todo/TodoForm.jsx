import React, { useState } from 'react';

const TodoForm = (props) => {
  const {addNewTodo} = props;

  const [valueInput, setValueInput] = useState('')

  const handleClick = () => {
    addNewTodo(valueInput)
    setValueInput('')
  }

  const handleChange = (e) => {
    console.log('handle change', e)
    setValueInput(e)
  }

  return (
     <div className="todo-form">
        <input
          type="text"
          onChange={(event) => handleChange(event.target.value)}
          value={valueInput}
        />

        <button 
          style={{cursor: "pointer"}}
          onClick={handleClick}
        >Add</button>
      </div>
  )
}

export default TodoForm;