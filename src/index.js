import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Chat from './components/Chat'
import CodeCheck from './components/CodeCheck'
import ChangeCurrentUser from './containers/ChangeCurrentUser'
import './styles/App.css'

import configureStore from './store/configureStore'

import { Router, Route, browserHistory } from 'react-router'


const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={ChangeCurrentUser} />
      <Route path= '/code_check' component={CodeCheck} />
      <Route path='/chat' component={Chat} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
