import { connect } from 'react-redux'
import MessageList from '../components/MessageList'
import {deleteMessage} from '../actions'

const mapStateToProps = (state) => {
  console.log('state in getMessageList#mapStateToProps ' + state.currentUser.name)
  return {
    messages: state.messages,
    currentUserName: state.currentUser.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMessage: (id) => {
      dispatch(deleteMessage(id))
    }
  }
}

const GetMessageList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageList)

export default GetMessageList
