import { takeEvery, call, put } from 'redux-saga/effects'
import {
  ADD_MESSAGE
} from '../constants/All'
import API from '../services/Api'


const api = API.create()

export function* mySaga() {
  yield takeEvery(ADD_MESSAGE, makeConsoleLog)
}

function* makeConsoleLog() {
  yield put({type: 'IS_FETCHING'})
  const response = yield call(api.getCode)
  if (response.ok) {
    console.log(response.data)
  } else {
    console.log(response.problem)
  }

}
