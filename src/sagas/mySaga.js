import { takeEvery, put } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import {
  ADD_MESSAGE
} from '../constants/All'
import {ACCESS_TOKEN_30,
        CLIENT_30,
        UID_30 } from '../constants/AuthInfo'

let myHeaders = {
  'Content-Type' : 'application/json',
  'access-token': ACCESS_TOKEN_30,
  'uid' : UID_30,
  'client' : CLIENT_30
}


export function* mySaga() {
  yield takeEvery(ADD_MESSAGE, sendMessage)
}

function* sendMessage(action) {
  yield put({type: 'IS_FETCHING'});
  const messages = yield fetchData(action.text);
  yield put({type: 'UPDATE_MESSAGES', messages})
  yield delay(1000);
  yield put({type: 'STOP_FETCHING'});
}

function fetchData(text) {
  let myBody = JSON.stringify({
  'data' : {
    'attributes' :{
       'conversation_id' : '6',
       'text' : text
      }
    }
  })

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
         return {
           id: m._id,
           author: m.user.name,
           text: m.text
         }
       });
      return(messages);
    });
}
