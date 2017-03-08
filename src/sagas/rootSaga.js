import {deleteSaga} from './deleteSaga'
import {mySaga} from './mySaga'
import {preloadSaga} from './preloadSaga'
import {getCodeSaga} from './getCodeSaga'
 


export function* rootSaga() {
  yield [
    mySaga(),
    deleteSaga(),
    preloadSaga(),
    getCodeSaga()
  ]
}