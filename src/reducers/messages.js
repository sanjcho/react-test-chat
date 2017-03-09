import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGES
} from '../constants/All'
import {REHYDRATE} from 'redux-persist/constants'
import {processSpecial} from 'redux-persist'

const message = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        id: action.id,
        text: action.text,
        author: action.user.name
      }
    default:
      return state
  }
}

const messages = (state = [], action) => {
  console.log(state)
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        message(undefined, action)
      ]
    case DELETE_MESSAGE:
      return state.filter(message => message.id != action.id )
    case UPDATE_MESSAGES:
      return action.messages
      default:
      return state
    case REHYDRATE:
      var incoming = action.payload.myReducer
      if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
      return state
  }
}

export default messages
