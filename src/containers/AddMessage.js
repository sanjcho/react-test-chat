import React from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'
import { Button } from 'react-bootstrap';

let AddMessage = ({user, conversationId, dispatch }) => {
  let input
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addMessage(user, input.value, conversationId))
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
    user: state.currentUser,
    conversationId: state.currentConversation
  }
}

AddMessage = connect(mapStateToProps)(AddMessage)

export default AddMessage
