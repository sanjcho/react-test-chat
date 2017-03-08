import { takeEvery, put } from 'redux-saga/effects'
import { CHANGE_USER } from '../constants/All'

export function* getCodeSaga(){
    yield takeEvery(CHANGE_USER, getCode)
}

function* getCode(action){
  yield put({type: 'IS_FETCHING'});
  yield fetchGet(action.phone_number);
  yield put({type: 'STOP_FETCHING'});
}

function fetchGet(phone_number) {

    let myHeaders = {
        'Content-Type' : 'application/json'
    }
    let myBody = JSON.stringify({
        'data' : {
            'attributes' :{
            'phone_number' : phone_number
            }
        }
     })

  

  fetch('http://localhost:3001/api/v1/auth/get_code',
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
        console.log('code getted:')
        console.log(j)        
    });

}
