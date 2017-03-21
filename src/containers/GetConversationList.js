import { connect } from 'react-redux'
import ConversationList from '../components/ConversationList'
import {preloadConversations} from '../actions'

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
    }
  }
}

const GetConversationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList)

export default GetConversationList