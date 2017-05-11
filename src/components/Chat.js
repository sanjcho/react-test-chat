import React from 'react'
import AddMessage from '../containers/AddMessage'
import GetMessageList from '../containers/GetMessageList'
import GetConversationList from '../containers/GetConversationList'

const Chat = () => (
  <div> 
    <div className='col-md-3'>
      <div className='conversation-list'>
        <GetConversationList/>
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

export default Chat
