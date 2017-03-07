import React, { PropTypes } from 'react'

const Message = ({deleteMessage, author, text, id, currentUserName }) => {
  console.log('author: ' + author)
  console.log('current: ' + currentUserName)
  function handleClick(e) {
    e.preventDefault()
    if (author === currentUserName) {
      deleteMessage(id)
    }
  }
  return(
    <p>
      {author}: {text}
      <a href='#' onClick={handleClick}>
        Delete me
      </a>
    </p>
  )
}
Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  currentUserName: PropTypes.string.isRequired,
  deleteMessage: PropTypes.func.isRequired
}

export default Message
