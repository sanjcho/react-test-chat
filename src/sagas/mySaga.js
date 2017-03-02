import { takeEvery, call, put } from 'redux-saga/effects'
import {
  ADD_MESSAGE
} from '../constants/All'
// import API from '../services/Api'
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
  yield put({type: 'IS_FETCHING'})
  const response = yield call(fetchData, action.text)
  console.log(response)
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

  fetch('http://localhost:3001/api/v1/messages/',
    {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
      body: myBody
    })
    .then(function(r) { console.log(r) })
    .then(function (j) { return j.json() });
}
