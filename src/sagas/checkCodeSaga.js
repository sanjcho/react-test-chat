import { takeEvery, put, select } from 'redux-saga/effects'
import {browserHistory} from 'react-router'
import {CHECK_CODE,
        IS_FETCHING,
        STOP_FETCHING,
        SAVE_AUTH_INFO } from '../constants/All'

const getUser = state => state.currentUser

export function* checkCodeSaga(){
    yield takeEvery(CHECK_CODE, checkCode)
}

function* checkCode(action){
  yield put({type: IS_FETCHING});
  const user = yield select(getUser)
  const authInfo = yield fetchCheck(action.code, user.phone_number);
  yield put({type: SAVE_AUTH_INFO, ...authInfo})
  yield put({type: STOP_FETCHING});
  yield browserHistory.push('/chat')
}

function fetchCheck(code, phone_number) {

    let myHeaders = {
        'Content-Type' : 'application/json'
    }
    let myBody = JSON.stringify({
        'data' : {
            'attributes' :{
            'phone_number' : phone_number,
            'code' : code
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
        console.log('code checked:' + j.auth_info);
        let authInfo = {
            accessToken: j.auth_info['access-token'],
            client: j.auth_info.client,
            uid: j.auth_info.uid
        }
        return authInfo        
    });

}
