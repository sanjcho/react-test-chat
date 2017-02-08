import React, { PropTypes } from 'react'
import Message from './Message'
//  Не факт что сообщения вообще есть
const MessageList = ({ messages, deleteMessage, currentUserName }) => {
  console.log('currentUserName in messageList: '+ currentUserName)
  return(
    <div>
      <h3>
        Chat:
      </h3>
      <div>
        {messages.map(message =>
          <div>
            <Message
              key={message.id}
              deleteMessage={deleteMessage}
              currentUserName={currentUserName}
              {...message}
            />
          </div>
        )}
      </div>
    </div>
  )
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deleteMessage: PropTypes.func.isRequired,
  currentUserName: PropTypes.string.isRequired
}

export default MessageList
