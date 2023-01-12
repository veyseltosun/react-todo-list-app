import React from 'react'
import { connect } from 'react-redux'
import AddTodo from '../components/AddTodo'

export const Main = (props) => {
  return (
    <div>
        <AddTodo/>
    </div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps =(dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Main)