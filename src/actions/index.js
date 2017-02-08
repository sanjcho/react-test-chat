import {
  CHANGE_USER,
  ADD_MESSAGE
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
