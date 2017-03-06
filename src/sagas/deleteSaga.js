import { takeEvery, put } from 'redux-saga/effects'
import { DELETE_MESSAGE} from '../constants/All'
import {ACCESS_TOKEN_30,
        CLIENT_30,
        UID_30 } from '../constants/AuthInfo'

export function* deleteSaga(){
    yield takeEvery(DELETE_MESSAGE, deleteFromServer)
}

function* deleteFromServer(action){
  yield put({type: 'IS_FETCHING'});
  yield fetchDelete(action.id);
  yield put({type: 'STOP_FETCHING'});
}

function fetchDelete(id) {

  let myHeaders = {
    'Content-Type' : 'application/json',
    'access-token': ACCESS_TOKEN_30,
    'uid' :  UID_30,
    'client' : CLIENT_30
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
