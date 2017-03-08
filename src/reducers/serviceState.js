import {
  IS_FETCHING,
  STOP_FETCHING
} from '../constants/All'

const initialState = {
  isFetching: false
}

const serviceState = (state = initialState, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return Object.assign({}, state, {
        isFetching: true
      } )
    case STOP_FETCHING:
    return Object.assign({}, state, {
      isFetching: false
    } )
    default:
      return state
  }
}

export default serviceState
