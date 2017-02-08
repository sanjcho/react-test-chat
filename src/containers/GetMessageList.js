import { connect } from 'react-redux'
import MessageList from '../components/MessageList'
import {deleteMessage} from '../actions'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
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
