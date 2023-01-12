import React from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'
import styles from "./Main.style.js"

export const Main = (props) => {
    return (
        <div style={styles.appContainer}>
            <div style={styles.container}>
                <h1 style={styles.title}>TodoList</h1>
                <AddTodo />

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => {}

export default connect(mapStateToProps, mapDispatchToProps)(Main)