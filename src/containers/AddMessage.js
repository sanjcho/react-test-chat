import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import { Button } from 'react-bootstrap';

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
        <Button bsSize='xsmall' type='submit'>
          Add Message
        </Button>
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
