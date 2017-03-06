import { connect } from 'react-redux'
import MessageList from '../components/MessageList'
import {deleteMessage, preloadMessages} from '../actions'

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    currentUserName: state.currentUser.name,
    fetching: state.serviceState.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMessage: (id) => {
      dispatch(deleteMessage(id))
    },
    preloadMessages: () => {
      dispatch(preloadMessages())
    }
  }
}

const GetMessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)

export default GetMessageList
