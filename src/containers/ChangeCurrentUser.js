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
    changeUser: (phone_number) => {
      dispatch(changeUser(phone_number))
    }
  }
}

const ChangeCurrentUser = connect(
  mapStateToProps, mapDispatchToProps
)(CurrentUser)

export default ChangeCurrentUser
