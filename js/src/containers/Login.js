import { connect } from 'react-redux'
import { authLogin } from '../actions'
import Login from '../../src/components/Login/Login'

const mapStateToProps = state => {
  return ({
    isAuth: state.auth.isAuth,
  })
}

const mapDispatchToProps = (dispatch) => ({
  authLogin: (inputData) => dispatch(authLogin(inputData)),
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

