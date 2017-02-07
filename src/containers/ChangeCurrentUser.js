import { connect } from 'react-redux'
import CurrentUser from '../components/CurrentUser'
import addUser from '../actions'


const setColor = () => {
  let letters = '012345'
  let color = '#'
  for (var i = 0; i < 3; i++ ) {
    color += letters[Math.floor(Math.random() * 6)]
  }
  return color
}

const ChangeCurrentUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser)

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  changeUser: (name) => {
    dispatch(addUser(name, setColor()))
  }
}

export default ChangeCurrentUser
