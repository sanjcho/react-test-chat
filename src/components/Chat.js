import React, { Component }  from 'react'
import AddMessage from '../containers/AddMessage'
import GetMessageList from '../containers/GetMessageList'
import GetConversationList from '../containers/GetConversationList'

export default class Chat extends Component {
  render() {
    return(
      <div> 
        <div className='col-md-3'>
          <div className='conversation-list'>
            <GetConversationList />
          </div>
        </div>
        <div className='col-md-6'>
          <div className='messages-list'>
            <GetMessageList/>
          </div>
          <div className='add-message'>
            <AddMessage/>
          </div>
        </div>
      </div>
    )
  }
}

