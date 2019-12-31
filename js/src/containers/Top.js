import React from 'react'
import { connect } from 'react-redux'
import { handleChangeSearchId, getMovieById, getMovieFromTmdb, getMoviesByUserId, getMovies } from '../actions'
import TopComp from '../components/Top/Top'

const mapStateToProps = state => {
  return ({
    movie: state.movie.movie,
    movieTmdb: state.movie.movieTmdb,
    movies: state.movies.movies,
    userMovies: state.movies.userMovies
  })
}

const mapDispatchToProps = (dispatch) => ({
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

