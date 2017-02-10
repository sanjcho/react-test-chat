import { combineReducers } from 'redux'
import messages from './messages'
import currentUser from './currentUser'
import serviceState from './serviceState'


const chatApp = combineReducers({
  messages,
  currentUser,
  serviceState
})

export default chatApp
