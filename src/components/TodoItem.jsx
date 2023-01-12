import React from 'react'
import styles from './TodoItem.style';


const TodoItem = ({task, deleteTodo, completedTodo}) => {
    return (
        <div>
            <div style={styles.taskContainer}>
                <div style={styles.taskWrapper}>

                    <p style={{...styles.task, textDecoration: task.completed === true ? "line-through" : "none"}}>{task.text}</p>
                    <div style={styles.iconsWrapper}>
                        <i className='fas fa-check-circle' style={styles.completedIcon} onClick={() => completedTodo(task.text)}></i>
                        <i className='fas fa-trash-alt' style={styles.deletedIcon} onClick={()=>deleteTodo(task.text)}></i>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default TodoItem