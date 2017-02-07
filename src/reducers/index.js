import { combineReducers } from 'redux'
import messages from './messages'
import currentUser from './currentUser'

const chatApp = combineReducers({
  messages,
  currentUser
})

export default chatApp
