import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App'
import './styles/app.css'

import configureStore from './store/configureStore'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'


const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <IndexRoute component={App} />
      <Route path='/(:filter)' component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
