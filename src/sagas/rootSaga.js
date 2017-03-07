import {deleteSaga} from './deleteSaga'
import {mySaga} from './mySaga'
import {preloadSaga} from './preloadSaga'
 


export function* rootSaga() {
  yield [
    mySaga(),
    deleteSaga(),
    preloadSaga()
  ]
}