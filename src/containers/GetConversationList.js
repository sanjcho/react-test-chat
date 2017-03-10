import { connect } from 'react-redux'
import ConversationList from '../components/ConversationList'
import {preloadConversation} from '../actions'

const mapStateToProps = (state) => {
  return {
    conversations: state.conversations,
    fetching: state.serviceState.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    preloadConversation: () => {
      dispatch(preloadConversation())
    }
  }
}

const GetConversationList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationList)

export default GetConversationList