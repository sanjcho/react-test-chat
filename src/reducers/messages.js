import {
  ADD_MESSAGE,
  DELETE_MESSAGE
} from '../constants/All'

const message = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        id: action.id,
        text: action.text,
        author: action.user.name,
        color: action.user.color
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
      default:
      return state
  }
}

export default messages
