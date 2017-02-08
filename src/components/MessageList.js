import React, { PropTypes } from 'react'
import Message from './Message'
//  Не факт что сообщения вообще есть
const MessageList = ({ messages }) => (
  <ul>
    {messages.map(message =>
      <div>
        <p>
          <Message
            key={message.id}
            {...message}
          />
        </p>
        <p>{console.log(message.id)}</p>

      </div>
    )}
  </ul>
)

MessageList.propTypes = {
  Messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default MessageList
