import React from 'react'
import styles from './TodoItem.style';


const TodoItem = () => {
  return (
    <div>
        <div style={styles.taskContainer}>
           <div style={styles.taskWrapper}> 

           <p style={styles.task}>Cook Dinner</p>
           <div style={styles.iconsWrapper}>
            <i className='fas fa-check-circle'style={styles.completedIcon}></i>
            <i className='fas fa-trash-alt'style={styles.deletedIcon}></i>
           </div>

           </div>
        </div>
        
    </div>
  )
}

export default TodoItem