import React, { PropTypes } from 'react'

const Message = ({author, text, color }) => (
  <li
    style={{
      color: color
    }}
  >
    {author}: {text}
  </li>
)

Message.propTypes = {
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Message
