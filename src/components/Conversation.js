import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const Conversation = ({ recipient, accessLevelName, permission, id}) => {

  return(
    <div>
      {recipient.name}: {accessLevelName}
      <p> Permission: {permission} </p>
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
  permission: PropTypes.boolean
}

export default Conversation
