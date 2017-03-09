import {
  CHANGE_USER,
  SAVE_AUTH_INFO
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
    case SAVE_AUTH_INFO:
      return Object.assign({}, state, {
        authInfo: {
          accessToken: action.accessToken,
          client: action.client,
          uid: action.uid
        }
      })
    default:
      return state
  }
}

export default currentUser
