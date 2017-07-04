import { connect } from 'react-redux'
import MessageList from '../components/MessageList'
import {deleteMessage, preloadMessages} from '../actions'

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    fetching: state.serviceState.isFetching,
    conversationId: state.conversations[0].id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMessage: (id) => {
      dispatch(deleteMessage(id))
    },
    preloadMessages: (id) => {
      dispatch(preloadMessages(id))
    }
  }
}

const GetMessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)

export default GetMessageList
