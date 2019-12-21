import { connect } from 'react-redux'
import { incrementUserId, incrementGroupId, getMovieById, getMovies, handleChangeSearchId, getMovieFromTmdb } from '../actions'
import Top from '../../src/components/Top/Top'

const mapStateToProps = state => {
  return ({
    userId: state.incrementUserId.userId,
    groupId: state.incrementGroupId.groupId,
    title: state.getMovieById.title,
    released: state.getMovieById.released,
    searchId: state.handleChangeSearchId,
    movies: state.getMovies,
    titleTmdb: state.getMovieFromTmdb.title,
    releaseDateTmdb: state.getMovieFromTmdb.release_date
  })
}

const mapDispatchToProps = (dispatch) => ({
  incrementUserId: () => dispatch(incrementUserId()),
  incrementGroupId: () => dispatch(incrementGroupId()),
  getMovieById: () => dispatch(getMovieById()),
  getMovies: () => dispatch(getMovies()),
  handleChangeSearchId: (id) => dispatch(handleChangeSearchId(id)),
  getMovieFromTmdb: () => dispatch(getMovieFromTmdb())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top)

