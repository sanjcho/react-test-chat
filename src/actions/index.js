import {
  CHANGE_USER,
  ADD_MESSAGE,
  DELETE_MESSAGE,
  IS_FETCHING,
  STOP_FETCHING,
  UPDATE_MESSAGES,
  PRELOAD_MESSAGES,
  CHECK_CODE,
  SAVE_AUTH_INFO,
  UPDATE_CONVERSATIONS,
  PRELOAD_CONVERSATIONS,
  UPDATE_CURRENT_CONVERSATION
} from '../constants/All'

let nextMessageId = 0

export const changeUser = (phone_number) => {
  return {
    type: CHANGE_USER,
    phone_number
  }
}

export const addMessage = (user, text, conversationId) => {
  return {
    type: ADD_MESSAGE,
    id: nextMessageId++,
    user,
    text,
    conversationId
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
    messages
  }
}

export const preloadMessages = (conversation_id) => {
  return {
    type: PRELOAD_MESSAGES,
    conversation_id
  }
}

export const checkCode = (code) => {
  return {
    type: CHECK_CODE,
    code
  }
}

export const saveAuthInfo = (accessToken, client, uid) => {
  return {
    type: SAVE_AUTH_INFO,
    accessToken,
    client,
    uid
  }
}

export const updateConversations = (conversations) => {
  return {
    type: UPDATE_CONVERSATIONS,
    conversations
  }
}

export const preloadConversations = () => {
  return {
    type: PRELOAD_CONVERSATIONS
  }
}

export const updateCurrentConversation = (conversationId) => {
  return {
    type: UPDATE_CURRENT_CONVERSATION,
    conversationId
  }
}


// Planned store structure
// {
//   current_user: {
//     name: "",
//      authInfo: {
//        accessToken: ,
//        client: ,
//        uid: 
//      }
//   },
//   conversations: [
//     {id: ,
//     accessLevelName:
//     permission: ,
//     recipient: {
//       id: ,
//       name: ,
//     }
//    },
//    {},...
//   ]
//   messages: [
//     {id: num,
//     user: "",
//     text: "",
//     color: ""},
//     {},
//     ...
//   ]
// }
