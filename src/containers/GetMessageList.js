import { connect } from 'react-redux'
import MessageList from '../components/MessageList'


const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const GetMessageList = connect(
  mapStateToProps
)(MessageList)

export default GetMessageList
