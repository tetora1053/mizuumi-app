import React from 'react';
import { connect } from 'react-redux'
import { incrementUserId, incrementGroupId, getMovieById, getMovies, handleChangeSearchId, getMovieFromTmdb, getMoviesByUserId } from '../actions'
import TopComp from '../components/Top/Top'

class Top extends React.Component {
  render() {
    return (
      <div>
        <TopComp />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    userId: state.incrementUserId.userId,
    groupId: state.incrementGroupId.groupId,
    searchId: state.handleChangeSearchId,
    movie: state.movie.movie,
    movieTmdb: state.movie.movieTmdb,
    movies: state.movies.movies,
    userMovies: state.movies.userMovies
  })
}

const mapDispatchToProps = (dispatch) => ({
  incrementUserId: () => dispatch(incrementUserId()),
  incrementGroupId: () => dispatch(incrementGroupId()),
  handleChangeSearchId: (id) => dispatch(handleChangeSearchId(id)),
  getMovieById: () => dispatch(getMovieById()),
  getMovieFromTmdb: () => dispatch(getMovieFromTmdb()),
  getMovies: () => dispatch(getMovies()),
  getMoviesByUserId: (user_id) => dispatch(getMoviesByUserId(user_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopComp)

