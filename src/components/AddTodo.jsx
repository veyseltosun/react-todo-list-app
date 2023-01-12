import React from 'react'
import styles from './AddTodo.style.jsx'

const AddTodo = () => {
  return (
    <div>
       <input  style={styles.inputField}/>
       <button style={styles.submitButton}>Add</button>
    </div>
  )
}

export default AddTodo
