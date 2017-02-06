import {
  ADD_MESSAGE
} from '../constants/All'

const message = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        id: action.id,
        text: action.text,
        user: action.user,
        color: action.color
      }
    // case 'TOGGLE_TODO':
    //   if (state.id !== action.id) {
    //     return state
    //   }
    //
    //   return Object.assign({}, state, {
    //     completed: !state.completed
    //   })
    //
    default:
      return state
  }
}

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return [
        ...state,
        message(undefined, action)
      ]
    // case 'TOGGLE_TODO':
    //   return state.map(t =>
    //     todo(t, action)
    //   )
    default:
      return state
  }
}

export default messages
