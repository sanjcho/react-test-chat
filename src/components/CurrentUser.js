import React, { PropTypes } from 'react'
import { Button  } from 'react-bootstrap';
import { browserHistory } from 'react-router'

const CurrentUser = ({currentUser, changeUser }) => {
  if (typeof currentUser.authInfo !== 'undefined') {
    browserHistory.push('/conversation_list')
  }
  let input
  return(
    <div>
      <h3>
        Please, enter your'e phone_number
      </h3>
      <div>
        <form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          changeUser(input.value)
          browserHistory.push('/code_check')
        }}>
          <input ref={node => {
            input = node
          }} />
          <Button type= 'submit'>
            Next
          </Button>
        </form>
      </div>
    </div>
  )
}

CurrentUser.propTypes = {
  changeUser: PropTypes.func.isRequired
}

export default CurrentUser
