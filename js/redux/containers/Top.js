import { connect } from 'react-redux'
import { incrementUserId, incrementGroupId } from '../actions'
import Top from '../../src/components/Top/Top'

const mapStateToProps = state => {
  return ({
    userId: state.incrementUserId.userId,
    groupId: state.incrementGroupId.groupId
  })
}

const mapDispatchToProps = (dispatch) => ({
  incrementUserId: () => dispatch(incrementUserId()),
  incrementGroupId: () => dispatch(incrementGroupId())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)

