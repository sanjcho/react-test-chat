import { connect } from 'react-redux'
import CurrentUser from '../components/CurrentUser'
import {changeUser} from '../actions'


const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeUser: (name) => {
      dispatch(changeUser(name))
    }
  }
}

const ChangeCurrentUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentUser)

export default ChangeCurrentUser
