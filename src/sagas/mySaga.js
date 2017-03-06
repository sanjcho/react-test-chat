import { takeEvery, put } from 'redux-saga/effects'
import {
  ADD_MESSAGE
} from '../constants/All'
import {ACCESS_TOKEN_30,
        CLIENT_30,
        UID_30,
        ACCESS_TOKEN_33,
        CLIENT_33,
        UID_33 } from '../constants/AuthInfo'


export function* mySaga() {
  yield takeEvery(ADD_MESSAGE, sendMessage)
}

function* sendMessage(action) {
  yield put({type: 'IS_FETCHING'});
  const messages = yield fetchData(action.text, action.user);
  yield put({type: 'UPDATE_MESSAGES', messages})
  yield put({type: 'STOP_FETCHING'});
}

function fetchData(text, user) {
  let myBody = JSON.stringify({
  'data' : {
    'attributes' :{
       'conversation_id' : '6',
       'text' : text
      }
    }
  })
  let myHeaders = {
    'Content-Type' : 'application/json',
    'access-token': user.name == 'Тестовый 1' ? ACCESS_TOKEN_30 : ACCESS_TOKEN_33,
    'uid' : user.name == 'Тестовый 1' ?  UID_30 : UID_33,
    'client' : user.name == 'Тестовый 1' ? CLIENT_30 : CLIENT_33
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
         return {
           id: m._id,
           author: m.user.name,
           text: m.text
         }
       });
      return(messages);
    });
}
