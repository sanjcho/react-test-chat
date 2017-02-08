import React, { PropTypes } from 'react'

const Message = ({deleteMessage, author, text, color, id, currentUserName }) => {
  console.log('author: ' + author)
  console.log('current: ' + currentUserName)
  function handleClick(e) {
    e.preventDefault()
    if (author === currentUserName) {
      deleteMessage(id)
    }
  }
  return(
    <p
      style={{
        color: color
      }}
    >
      {author}: {text}  
      <a href='#' onClick={handleClick}>
        Delete me
      </a>
    </p>
  )
}
Message.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currentUserName: PropTypes.string.isRequired,
  deleteMessage: PropTypes.func.isRequired
}

export default Message
