import {
  UPDATE_CONVERSATIONS
    } from '../constants/All'
import {REHYDRATE} from 'redux-persist/constants'
import {processSpecial} from 'redux-persist'


const conversations = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CONVERSATIONS:
      return action.conversations
    case REHYDRATE:
      var incoming = action.payload.myReducer
      if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
      return state
    default:
      return state
  }
}

export default conversations
