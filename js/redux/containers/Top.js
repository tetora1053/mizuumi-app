import React from 'react';
import { connect } from 'react-redux'
import { incrementUserId, incrementGroupId, getMovieById, getMovies, handleChangeSearchId, getMovieFromTmdb, getMoviesByUserId } from '../actions'
import TopComp from '../../src/components/Top/Top'

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
    title: state.getMovieById.title,
    release_date: state.getMovieById.release_date,
    searchId: state.handleChangeSearchId,
    movies: state.getMovies,
    user_movies: state.getMoviesByUserId,
    titleTmdb: state.getMovieFromTmdb.title,
    releaseDateTmdb: state.getMovieFromTmdb.release_date
  })
}

const mapDispatchToProps = (dispatch) => ({
  incrementUserId: () => dispatch(incrementUserId()),
  incrementGroupId: () => dispatch(incrementGroupId()),
  getMovieById: () => dispatch(getMovieById()),
  getMovies: () => dispatch(getMovies()),
  getMoviesByUserId: (user_id) => dispatch(getMoviesByUserId(user_id)),
  handleChangeSearchId: (id) => dispatch(handleChangeSearchId(id)),
  getMovieFromTmdb: () => dispatch(getMovieFromTmdb())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopComp)

