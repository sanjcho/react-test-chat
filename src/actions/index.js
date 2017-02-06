import {
  ADD_USER,
  ADD_MESSAGE
} from '../constants/All'

let nextMessageId = 0
export const addUser = (text) => {
  return {
    type: ADD_USER,
    user
  }
}

export const addMessage = (filter) => {
  return {
    type: ADD_MESSAGE,
    id: nextMessageId++,
    user,
    color,
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
