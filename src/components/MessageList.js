import React, { PropTypes } from 'react'
import Message from './Message'

const MessageList = ({ messages, deleteMessage, currentUserName, isFetching }) => {
  console.log('currentUserName in messageList: '+ currentUserName)
  return(
    <div>
      <p>
        {isFetching === true ? 'fetching' : '' }
      </p>
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
    author: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deleteMessage: PropTypes.func.isRequired,
  currentUserName: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired
}

export default MessageList
