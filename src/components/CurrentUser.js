import React, { PropTypes } from 'react'
import { Button  } from 'react-bootstrap';

const CurrentUser = ({currentUser, changeUser }) => {
  let input
  return(
    <div>
      <h3
        style={{
          color: currentUser.color
        }}
      >
        Current user is: {currentUser.name}
      </h3>
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          changeUser(input.value)
          input.value = ''
        }}>
          <input ref={node => {
            input = node
          }} />
          <Button type= 'submit'>
            Change Current User
          </Button>
        </form>
      </div>
    </div>
  )
}

CurrentUser.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  changeUser: PropTypes.func.isRequired
}

export default CurrentUser
