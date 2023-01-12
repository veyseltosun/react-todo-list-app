import React , { useState } from 'react'
import styles from './AddTodo.style.jsx'

const AddTodo = () => {
    const [todo, setTodo] = useState([]);

  return (
    <div>
       <input  style={styles.inputField} placeholder="Enter Todos" onChange={(event) => setTodo(event.target.value)}/>
       <button style={styles.submitButton}onClick={() => {}}>Add</button>
    </div>
  )
}

export default AddTodo
