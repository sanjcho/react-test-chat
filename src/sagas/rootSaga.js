import {deleteSaga} from './deleteSaga'
import {mySaga} from './mySaga'
import {preloadSaga} from './preloadSaga'
import {getCodeSaga} from './getCodeSaga'
import {checkCodeSaga} from './checkCodeSaga'
 


export function* rootSaga() {
  yield [
    mySaga(),
    deleteSaga(),
    preloadSaga(),
    getCodeSaga(),
    checkCodeSaga()
  ]
}