import { takeEvery, put, select } from 'redux-saga/effects'
import { CHECK_CODE } from '../constants/All'

const getUser = state => state.currentUser

export function* getCodeSaga(){
    yield takeEvery(CHECK_CODE, getCode)
}

function* getCode(action){
  yield put({type: 'IS_FETCHING'});
  const user = yield select(getUser)
  userProfile = yield fetchGet(action.code, user.phone_number);
  console.log(userProfile)
  yield put({type: 'STOP_FETCHING'});
}

function fetchGet(code, phone_number) {

    let myHeaders = {
        'Content-Type' : 'application/json'
    }
    let myBody = JSON.stringify({
        'data' : {
            'attributes' :{
            'phone_number' : phone_number,
            'code' : phone_number
            }
        }
     })

  

  return fetch('http://localhost:3001/api/v1/auth/check_code',
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
        return j        
    });

}
