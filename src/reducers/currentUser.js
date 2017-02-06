import {
  ADD_USER,
} from '../constants/All'

const initialState = {
  name: "default",
  color: "#000"
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return Object.assign({}, state, {
        name: action.name,
        color: action.color
      } )
    default:
      return state
  }
}

export default visibilityFilter
