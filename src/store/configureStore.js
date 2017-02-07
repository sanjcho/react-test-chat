import { createStore } from 'redux'
import chatApp from '../reducers'


const configureStore = () => {
  const store = createStore(
    chatApp,
    {
      currentUser: {
        name: 'Unknown',
        color: '#000'
      }
    }
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
