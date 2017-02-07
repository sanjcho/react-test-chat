import React from 'react'
import AddMessage from '../containers/AddMessage'
import ChangeCurrentUser from '../containers/ChangeCurrentUser'
import GetMessageList from '../containers/GetMessageList'


const App = () => (
  <div>
    <ChangeCurrentUser />
    <AddMessage/>
    <GetMessageList/>
  </div>
)

export default App
