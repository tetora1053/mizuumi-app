import { connect } from 'react-redux'
import { logout } from '../actions'
import Logout from '../../src/components/Logout/Logout'

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
})


export default connect(
  null,
  mapDispatchToProps
)(Logout)

