import { takeEvery, put, select } from 'redux-saga/effects'

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
    'access-token': user.authInfo.accessToken,
    'uid' : user.authInfo.uid,
    'client' : user.authInfo.client
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