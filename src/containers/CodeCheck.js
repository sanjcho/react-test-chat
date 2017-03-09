import { connect } from 'react-redux'
import {checkCode} from '../actions'
import CodeCheckForm from '../components/CodeCheckForm'


const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchCheck: (code) => {
            dispatch(checkCode(code))
        }
    }

}

const CodeCheck = connect(mapStateToProps, mapDispatchToProps)(CodeCheckForm)

export default CodeCheck