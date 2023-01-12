import React , { useState } from 'react'
import styles from './AddTodo.style.jsx'

const AddTodo = ({addTodo}) => {
    const [todo, setTodo] = useState([]);

  return (
    <div>
       <input  style={styles.inputField} placeholder="Enter Todos" onChange={(event) => setTodo(event.target.value)} value={todo}/>
       <button style={styles.submitButton} onClick={() => 
        {
        addTodo(todo);
        setTodo("")}}> Add</button>
    </div>
  )
}

export default AddTodo
