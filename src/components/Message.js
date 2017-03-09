import React, { PropTypes } from 'react'

const Message = ({deleteMessage, author, text, id }) => {
  function handleClick(e) {
    e.preventDefault()
    deleteMessage(id)
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
  deleteMessage: PropTypes.func.isRequired
}

export default Message
