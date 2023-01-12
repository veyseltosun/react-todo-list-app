import React from 'react'
import { connect } from 'react-redux'

export const Main = (props) => {
  return (
    <div>Main</div>
  )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps =(dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Main)