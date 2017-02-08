import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

let AddMessage = ({user, dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addMessage(user, input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type='submit'>
          Add Message
        </button>
      </form>
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    user: state.currentUser
  }
}

AddMessage = connect(mapStateToProps)(AddMessage)

export default AddMessage
