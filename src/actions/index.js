import {
  ADD_USER,
  ADD_MESSAGE
} from '../constants/All'

let nextMessageId = 0
export const addUser = (text) => {
  return {
    type: ADD_USER,
    username
  }
}

export const addMessage = (filter) => {
  return {
    type: ADD_MESSAGE,
    id: nextMessageId++,
    text
  }
}
