import React from 'react'
import { connect } from 'react-redux'
import { getMovieById, getMoviesByUserId, getMovies } from '../actions'
import AppComp from '../components/App/App'

const mapStateToProps = state => {
  return ({
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
)(AppComp)

