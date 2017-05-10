import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Conversation = ({ recipient, accessLevelName, permission, id}) => {
  return(
    <div>
      {(recipient == null) ? 'Групповой' : recipient.name } {accessLevelName}
      <p> Permission: {permission ? 'Да' : 'Нет'} </p>
      <Link to={`/conversations/${id}`}> Enter me </Link>
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
