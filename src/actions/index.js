import {
  CHANGE_USER,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  IS_FETCHING,
  STOP_FETCHING,
  UPDATE_MESSAGES,
  PRELOAD_MESSAGES
} from '../constants/All'

let nextMessageId = 0

export const changeUser = (name) => {
  return {
    type: CHANGE_USER,
    name
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

export const stopFetching = () => {
  return {
    type: STOP_FETCHING
  }
}

export const updateMessages = (messages) => {
  console.log(messages);
  return {
    type: UPDATE_MESSAGES,
    messages: messages
  }
}

export const preloadMessages = () => {
  return {
    type: PRELOAD_MESSAGES
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
