import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createLogger from 'redux-logger'
import chatApp from '../reducers'
import {rootSaga} from '../sagas/rootSaga'
import {persistStore, autoRehydrate} from 'redux-persist'

const sagaMiddleware = createSagaMiddleware()
const initialState = {
  currentUser: {
    name: 'Unknown'
  },
  conversations: [],
  messages: []
}

const configureStore = () => {
  const logger = createLogger()
  const store = createStore(
    chatApp,
    initialState,
    compose( 
      applyMiddleware(sagaMiddleware, logger),
      autoRehydrate()
    )
  )
  sagaMiddleware.run(rootSaga)
  persistStore(store)
  
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
export default configureStore
