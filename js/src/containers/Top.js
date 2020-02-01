import React from 'react'
import { connect } from 'react-redux'
import { getMovieById, getMoviesByUserId, getMovies } from '../actions'
import TopComp from '../components/Top/Top'

const mapStateToProps = state => {
  return ({
    movie: state.movie.movie,
    movies: state.movies.movies,
    userMovies: state.movies.userMovies
  })
}

const mapDispatchToProps = (dispatch) => ({
  getMovieById: (id) => dispatch(getMovieById(id)),
  getMovies: () => dispatch(getMovies()),
  getMoviesByUserId: (user_id) => dispatch(getMoviesByUserId(user_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopComp)

