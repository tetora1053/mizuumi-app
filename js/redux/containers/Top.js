import { connect } from 'react-redux'
import { incrementUserId, incrementGroupId, getMovies } from '../actions'
import Top from '../../src/components/Top/Top'

const mapStateToProps = state => {
  return ({
    userId: state.incrementUserId.userId,
    groupId: state.incrementGroupId.groupId,
    name: state.getMovies.name,
    released: state.getMovies.released
  })
}

const mapDispatchToProps = (dispatch) => ({
  incrementUserId: () => dispatch(incrementUserId()),
  incrementGroupId: () => dispatch(incrementGroupId()),
  getMovies: () => dispatch(getMovies())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)

