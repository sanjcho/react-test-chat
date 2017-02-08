import React, { PropTypes } from 'react'
import Message from './Message'
//  Не факт что сообщения вообще есть
const MessageList = ({ messages, deleteMessage }) => {
  console.log(deleteMessage)
  return(
    <div>
      <h3>
        Chat
      </h3>
      <div>
        {messages.map(message =>
          <div>
            <Message
              key={message.id}
              deleteMessage={deleteMessage}
              {...message}
            />
          </div>
        )}
      </div>
    </div>
  )
}

MessageList.propTypes = {
  Messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessageList
