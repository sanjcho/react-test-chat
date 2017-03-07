import {
  CHANGE_USER
} from '../constants/All'

const initialState = {
  name: 'default'
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return Object.assign({}, state, {
        name: action.name
      } )
    default:
      return state
  }
}

export default currentUser
