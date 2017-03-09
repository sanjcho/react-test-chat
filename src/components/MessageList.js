import React, { PropTypes } from 'react'
import Message from './Message'

class MessageList extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount(){ this.props.preloadMessages() }
  render(){
    return(
      <div>
        <p>
          {this.props.fetching === true ? 'fetching' : '' }
        </p>
        <h3>
          Chat:
        </h3>
        <div>
          {this.props.messages.map(message =>
            <div key={message.id}>
              <Message
                deleteMessage={this.props.deleteMessage}
                {...message}
              />
            </div>
          )}
        </div>
      </div>
    )
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  deleteMessage: PropTypes.func.isRequired,
  preloadMessages: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired
}

export default MessageList