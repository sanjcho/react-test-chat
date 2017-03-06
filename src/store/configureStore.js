import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import chatApp from '../reducers'
import {rootSaga} from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const initialState = {
  currentUser: {
    name: 'Unknown',
    color: '#555'
  }
}

const configureStore = () => {
  const logger = createLogger()
  const store = createStore(
    chatApp,
    initialState,
    applyMiddleware(sagaMiddleware, logger)
  )
  sagaMiddleware.run(rootSaga)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
export default configureStore
