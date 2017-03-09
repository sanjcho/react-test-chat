import { takeEvery, put, select } from 'redux-saga/effects'
import { DELETE_MESSAGE} from '../constants/All'

export function* deleteSaga(){
    yield takeEvery(DELETE_MESSAGE, deleteFromServer)
}

const getInfo = state =>  state.currentUser.authInfo

function* deleteFromServer(action){
  yield put({type: 'IS_FETCHING'});
  const authInfo = yield select(getInfo)
  console.log(authInfo)
  yield fetchDelete(action.id, authInfo);
  yield put({type: 'STOP_FETCHING'});
}

function fetchDelete(id, authInfo) {

  let myHeaders = {
    'Content-Type' : 'application/json',
    'access-token': authInfo.accessToken,
    'uid' :  authInfo.uid,
    'client' : authInfo.client
  }
  

  fetch('http://localhost:3001/api/v1/messages/' + id,
    {
        method: 'DELETE',
        mode: 'cors',
        headers: myHeaders
    })
    .then(function(r) {
        return r.json() ;
    })  
    .then(function (j) {
        console.log(j)
    });

}
