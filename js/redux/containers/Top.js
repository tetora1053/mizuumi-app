import { connect } from 'react-redux'
import { incrementUserId, incrementGroupId, getUser } from '../actions'
import Top from '../../src/components/Top/Top'

const mapStateToProps = state => {
  return ({
    userId: state.incrementUserId.userId,
    groupId: state.incrementGroupId.groupId,
    name: state.getUser.name,
    email: state.getUser.email
  })
}

const mapDispatchToProps = (dispatch) => ({
  incrementUserId: () => dispatch(incrementUserId()),
  incrementGroupId: () => dispatch(incrementGroupId()),
  getUser: () => dispatch(getUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)

