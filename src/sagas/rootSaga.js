import {deleteSaga} from './deleteSaga'
import {mySaga} from './mySaga'



export function* rootSaga() {
  yield [
    mySaga(),
    deleteSaga()
  ]
}