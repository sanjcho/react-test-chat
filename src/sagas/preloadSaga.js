import { takeEvery, put, select } from 'redux-saga/effects'
import {PRELOAD_CONVERSATIONS,
        PRELOAD_MESSAGES,
        IS_FETCHING,
        STOP_FETCHING,
        UPDATE_MESSAGES,
        UPDATE_CONVERSATIONS} from '../constants/All'

const getUser = state => state.currentUser

export function* preloadMessagesSaga() {
  yield takeEvery(PRELOAD_MESSAGES, preloadMessages)
}

export function* preloadConversationsSaga() {
  yield takeEvery(PRELOAD_CONVERSATIONS, preloadConversations)
}

function* preloadConversations() {
  yield put({ type: IS_FETCHING})
  const user = yield select(getUser)
  const result = yield fetchData(user)
  console.log(result)
  let conversations = result.conversations.map(function(c) {
    return {
      id: c.id,
      accessLevelName: c.access_level_name,
      permission: c.permission,
      conversationAvatar: c.conversation_avatar,
      newMessagesCount: c.new_messages_count,
      recipient: c.recipient
    }
  })
  yield put({type: UPDATE_CONVERSATIONS, conversations})
  yield put({type: STOP_FETCHING})
}

function* preloadMessages(action) {
  yield put({type: IS_FETCHING});
  const user = yield select(getUser)
  const result = yield fetchData(user, action.conversation_id);
  if (typeof(result.messages) !== 'undefined') {
    let messages = result.messages.map(function(m) {
        return {
          id: m._id,
          author: m.user.name,
          text: m.text
        }
      });
    yield put({type: UPDATE_MESSAGES, messages})
  }
  yield put({type: STOP_FETCHING});
}

function fetchData(user, id = '') {
  let myHeaders = {
    'Content-Type' : 'application/json',
    'access-token': user.authInfo.accessToken,
    'uid' : user.authInfo.uid,
    'client' : user.authInfo.client
  }
  

  return fetch(`http://localhost:3001/api/v1/conversations/${id}`,
    {
      method: 'get',
      mode: 'cors',
      headers: myHeaders
      })
      .then(function(r) {
        return r.json() ;
      })  
      .then(function (j) {
      return(j);
    });
}