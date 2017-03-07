import { takeEvery, put, select } from 'redux-saga/effects'
import {ACCESS_TOKEN_30,
        CLIENT_30,
        UID_30,
        ACCESS_TOKEN_33,
        CLIENT_33,
        UID_33 } from '../constants/AuthInfo'

const getUser = state => state.currentUser

export function* preloadSaga() {
  yield takeEvery('PRELOAD_MESSAGES', preloadMessages)
}

function* preloadMessages() {
  yield put({type: 'IS_FETCHING'});
  const user = yield select(getUser)
  const messages = yield fetchData(user);
  yield put({type: 'UPDATE_MESSAGES', messages})
  yield put({type: 'STOP_FETCHING'});
}

function fetchData(user) {
  let myHeaders = {
    'Content-Type' : 'application/json',
    'access-token': user.name == 'Тестовый 1' ? ACCESS_TOKEN_30 : ACCESS_TOKEN_33,
    'uid' : user.name == 'Тестовый 1' ?  UID_30 : UID_33,
    'client' : user.name == 'Тестовый 1' ? CLIENT_30 : CLIENT_33
  }
  

  return fetch('http://localhost:3001/api/v1/conversations/6',
    {
      method: 'get',
      mode: 'cors',
      headers: myHeaders
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