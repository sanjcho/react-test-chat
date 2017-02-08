import { connect } from 'react-redux'
import CurrentUser from '../components/CurrentUser'
import {changeUser} from '../actions'

const setColor = () => {
  let letters = '012345789'
  let color = '#'
  for (var i = 0; i < 3; i++ ) {
    color += letters[Math.floor(Math.random() * 9)]
  }
  return color
}


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: (name) => {
      dispatch(changeUser(name, setColor()))
    }
  }
}

const ChangeCurrentUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser)

export default ChangeCurrentUser
