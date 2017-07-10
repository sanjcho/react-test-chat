import React, { PropTypes } from 'react'

const Conversation = ({preloadMessages, setCurrentConversation, recipient, accessLevelName, permission, id }) => {
  function handleClick(e) {
    e.preventDefault()
    preloadMessages(id)
    setCurrentConversation(id)
  }
  return(
    <div>
      {(recipient == null) ? 'Групповой' : recipient.name } {accessLevelName}
      <p> Permission: {permission ? 'Да' : 'Нет'} </p>
      <a href='#' onClick={handleClick}>
        Enter me
      </a>
    </div>
  )
}
Conversation.propTypes = {
  recipient: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
  }),
  accessLevelName: PropTypes.string,
  id: PropTypes.number,
  permission: PropTypes.bool
}

export default Conversation
