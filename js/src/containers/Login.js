import { connect } from 'react-redux'
import { authLogin } from '../actions'
import Login from '../../src/components/Login/Login'

const mapDispatchToProps = (dispatch) => ({
  authLogin: (inputData) => dispatch(authLogin(inputData)),
})


export default connect(
  null,
  mapDispatchToProps
)(Login)

