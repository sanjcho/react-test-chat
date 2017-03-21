import { combineReducers } from 'redux'
import messages from './messages'
import currentUser from './currentUser'
import serviceState from './serviceState'
import conversations from './conversations'


const chatApp = combineReducers({
  messages,
  currentUser,
  serviceState,
  conversations
})

export default chatApp
