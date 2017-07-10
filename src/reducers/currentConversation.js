import {
  UPDATE_CURRENT_CONVERSATION
    } from '../constants/All'
import {REHYDRATE} from 'redux-persist/constants'
import {processSpecial} from 'redux-persist'


const currentConveration = (state = [], action) => {
  switch (action.type) {
    case UPDATE_CURRENT_CONVERSATION:
      return action.conversationId
    case REHYDRATE:
      var incoming = action.payload.myReducer
      if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
      return state
    default:
      return state
  }
}

export default currentConveration
