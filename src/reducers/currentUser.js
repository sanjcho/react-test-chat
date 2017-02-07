import {
  CHANGE_USER
} from '../constants/All'

const initialState = {
  name: 'default',
  color: '#000'
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return Object.assign({}, state, {
        name: action.name,
        color: action.color
      } )
    default:
      return state
  }
}

export default currentUser
