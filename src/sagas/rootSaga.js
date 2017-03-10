import {deleteSaga} from './deleteSaga'
import {mySaga} from './mySaga'
import {preloadMessagesSaga, preloadConversationsSaga} from './preloadSaga'
import {getCodeSaga} from './getCodeSaga'
import {checkCodeSaga} from './checkCodeSaga'
 


export function* rootSaga() {
  yield [
    mySaga(),
    deleteSaga(),
    preloadMessagesSaga(),
    preloadConversationsSaga(),
    getCodeSaga(),
    checkCodeSaga()
  ]
}