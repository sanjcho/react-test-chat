import {
  CHANGE_USER
} from '../constants/All'

const initialState = {
  name: 'default',
  phone_number: ''
}

const currentUser = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return Object.assign({}, state, {
        phone_number: action.phone_number
      } )
    default:
      return state
  }
}

export default currentUser
