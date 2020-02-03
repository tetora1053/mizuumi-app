import React from 'react'
import { connect } from 'react-redux'
import { getMovieTmbs, getMovieTmbsByUserId } from '../actions'
import MovieListComp from '../components/MovieList/MovieList'

const mapStateToProps = state => {
  return ({
    movieTmbs: state.movieTmbs,
  })
}

const mapDispatchToProps = (dispatch) => ({
  getMovieTmbs: () => dispatch(getMovieTmbs()),
  getMovieTmbsByUserId: (user_id) => dispatch(getMovieTmbsByUserId(user_id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListComp)

