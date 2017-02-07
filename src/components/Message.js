import React, { PropTypes } from 'react'

const Message = ({user, text, color }) => (
  <li
    style={{
      color: color
    }}
  >
    {user}: {text}
  </li>
)

Message.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Message
