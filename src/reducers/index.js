import { combineReducers } from 'redux'
import todos from './messages'
import visibilityFilter from './currentUser'

const chatApp = combineReducers({
  messages,
  currentUser
})

export default chatApp
