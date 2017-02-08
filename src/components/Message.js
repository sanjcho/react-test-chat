import React, { PropTypes } from 'react'

const Message = ({deleteMessage, author, text, color, id }) => {
  console.log('my funct from message is ' + deleteMessage)
  function handleClick(e) {
    e.preventDefault()
    console.log('The link was clicked.')
    deleteMessage(id)
  }
  return(
    <p
      style={{
        color: color
      }}
    >
      {author}: {text} {id}
      <a href='#' onClick={handleClick}>
        Delete me
      </a>
    </p>
  )
}
Message.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Message
