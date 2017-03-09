import { takeEvery, put, select } from 'redux-saga/effects'
import { CHECK_CODE } from '../constants/All'

const getUser = state => state.currentUser

export function* checkCodeSaga(){
    yield takeEvery(CHECK_CODE, checkCode)
}

function* checkCode(action){
  yield put({type: 'IS_FETCHING'});
  const user = yield select(getUser)
  const userProfile = yield fetchCheck(action.code, user.phone_number);
  console.log(userProfile)
  yield put({type: 'STOP_FETCHING'});
}

function fetchCheck(code, phone_number) {

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
        console.log('code checked:')
        return j        
    });

}
