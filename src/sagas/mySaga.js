import { takeEvery } from 'redux-saga/effects'
import {
  ADD_MESSAGE
} from '../constants/All'


export function* mySaga() {
  yield takeEvery(ADD_MESSAGE, makeConsoleLog)
}

function* makeConsoleLog() {
  console.log('Hello new message!')
}
