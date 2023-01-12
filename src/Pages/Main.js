import React from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import TodoItem from '../components/TodoItem'
import { addTask } from '../redux/actions'
import styles from "./Main.style.js"

export const Main = (props) => {
    return (
        <div style={styles.appContainer}>
            <div style={styles.container}>
                <h1 style={styles.title}>Todo  List</h1>
                <div style={styles.inputWrapper}>

                    <AddTodo addTodo={(todo) => props.addTodo(todo)}/>
                    <hr style={styles.seperator}/>
                </div>
                 <TodoItem/>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    addTodo : (todo) => dispatch(addTask(todo))
 })

export default connect(mapStateToProps, mapDispatchToProps)(Main)