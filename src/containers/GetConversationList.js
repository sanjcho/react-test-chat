import { connect } from 'react-redux'
import ConversationList from '../components/ConversationList'
import {preloadConversations, preloadMessages, updateCurrentConversation} from '../actions'

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
    fetching: state.serviceState.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    preloadConversations: () => {
      dispatch(preloadConversations())
    },
    preloadMessages: (id) => {
      dispatch(preloadMessages(id))
    },
    setCurrentConversation: (conversationId) => {
      dispatch(updateCurrentConversation(conversationId))
    }
  }
}

const GetConversationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList)

export default GetConversationList