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
                    <li key={conversation.id}>
                    <Conversation
                        {...conversation}
                    />
                    </li>
                )}
            </ul>
      </div>
    )
  }
}

ConversationList.propTypes = {
  сonversations: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  preloadConversations: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired
}

export default ConversationList