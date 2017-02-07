import { createStore } from 'redux'
import chatApp from '../reducers'

const initialState = {
  currentUser: {
    name: 'Unknown',
    color: '#555'
  }
}

const configureStore = () => {
  const store = createStore(
    chatApp,
    initialState
  )
  console.log(store.getState())

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }
  return store
}
export default configureStore
