import { combineReducers } from 'redux'
import messages from './messages'
import currentUser from './currentUser'
import serviceState from './serviceState'
import conversations from './conversations'
import currentConversation from './currentConversation'


const chatApp = combineReducers({
  messages,
  currentUser,
  serviceState,
  conversations,
  currentConversation
})

export default chatApp
