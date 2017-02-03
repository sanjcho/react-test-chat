import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import todoApp from './reducers'


const configureStore = () => {
  const logger = createLogger()
  const store = createStore(
    todoApp,
    applyMiddleware(logger))

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
export default configureStore
