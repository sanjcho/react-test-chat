import React, { PropTypes } from 'react'
import Conversation from './Conversation'

class ConversationList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){ this.props.preloadConversations() }
  render(){
    return(
      <div>
        <p>
          {this.props.fetching === true ? 'fetching' : '' }
        </p>
        <h3>
          Conversations:
        </h3>
            <ul>            
                {this.props.conversations.map(conversation =>
                  <div  className='one-conversation-in-list'>
                    <li key={conversation.id}>
                    <Conversation
                      preloadMessages = {this.props.preloadMessages}
                      setCurrentConversation = {this.props.setCurrentConversation}
                        {...conversation}
                    />
                    </li>
                  </div>
                )}
            </ul>
      </div>
    )
  }
}

ConversationList.propTypes = {
  conversations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    permission: PropTypes.bool,
    newMessagesCount: PropTypes.integer,
    conversationAvatar: PropTypes.object,
    recipient: PropTypes.shape({
      company: PropTypes.string,
      created_at: PropTypes.string,
      id: PropTypes.integer,
      name: PropTypes.string,
      phoneNumber: PropTypes.string,
      rating: PropTypes.number,
      avatar: PropTypes.object
    })
  }).isRequired).isRequired,
  preloadConversations: PropTypes.func.isRequired,
  preloadMessages: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired
}

export default ConversationList