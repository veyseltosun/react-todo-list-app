import React from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import TodoItem from '../components/TodoItem'
import { addTask, deleteTask, completedTask} from '../redux/actions'
import styles from "./Main.style.js"

export const Main = (props) => {
    console.log("redux todos:", props.taskItems)
    return (
        <div style={styles.appContainer}>
            <div style={styles.container}>
                <h1 style={styles.title}>Todo  List</h1>
                <div style={styles.inputWrapper}>

                    <AddTodo addTodo={(todo) => props.addTodo(todo)}/>
                    <hr style={styles.seperator}/>
                </div>
                {props.taskItems.map((task, index) => {
                    return(
                        <TodoItem task={task} key={index} deleteTodo={(task) => props.deleteTodo(task)} completedTodo={(task) => props.completedTodo(task)} />
                    )
                })}

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    taskItems : state.taskItems
})

const mapDispatchToProps = (dispatch) => ({
    addTodo : (task) => dispatch(addTask(task)),
    deleteTodo : (task) => dispatch(deleteTask(task)),
    completedTodo : (task) => dispatch(completedTask(task)),
 })

export default connect(mapStateToProps, mapDispatchToProps)(Main)