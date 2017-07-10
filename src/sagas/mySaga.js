import { takeEvery, put, select } from 'redux-saga/effects'
import {
  ADD_MESSAGE
} from '../constants/All'

export function* mySaga() {
  yield takeEvery(ADD_MESSAGE, sendMessage)
}

const getUser = state => state.currentUser

function* sendMessage(action) {
  yield put({type: 'IS_FETCHING'});
  const user = yield select(getUser)
  const messages = yield fetchData(action.text, user, action.conversationId);
  yield put({type: 'UPDATE_MESSAGES', messages})
  yield put({type: 'STOP_FETCHING'});
}

function fetchData(text, user, conversationId) {
  let myBody = JSON.stringify({
  'data' : {
    'attributes' :{
       'conversation_id' : conversationId,
       'text' : text
      }
    }
  })
  let myHeaders = {
    'Content-Type' : 'application/json',
    'access-token': user.authInfo.accessToken,
    'uid' : user.authInfo.uid ,
    'client' : user.authInfo.client
  }
  

  return fetch('http://localhost:3001/api/v1/messages/',
    {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
        body: myBody
      })
      .then(function(r) {
        return r.json() ;
      })  
      .then(function (j) {
      let messages = j.messages.map(function(m) {
        console.log('user from api' + m.user)
         return {
           id: m._id,
           author: m.user.name,
           text: m.text
         }
       });
      return(messages);
    });
}
