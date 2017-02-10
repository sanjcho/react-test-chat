import {
  CHANGE_USER,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  IS_FETCHING
} from '../constants/All'

let nextMessageId = 0

export const changeUser = (name, color) => {
  return {
    type: CHANGE_USER,
    name,
    color
  }
}

export const addMessage = (user, text) => {
  return {
    type: ADD_MESSAGE,
    id: nextMessageId++,
    user,
    text
  }
}

export const deleteMessage = (id) => {
  return {
    type: DELETE_MESSAGE,
    id: id
  }
}

export const isFetching = () => {
  return {
    type: IS_FETCHING
  }
}


// Planned store structure
// {
//   current_user: {
//     name: "",
//     color: ""
//   },
//   messages: [
//     {id: num,
//     user: "",
//     text: "",
//     color: ""},
//     {},
//     ...
//   ]
// }
