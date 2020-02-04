import React from 'react'
import { connect } from 'react-redux'
import { getMovieTmbs, getMovieTmbsByUserId, getMovieTmbsByGenreId } from '../actions'
import MovieListComp from '../components/MovieList/MovieList'

const mapStateToProps = state => {
  return ({
    movieTmbs: state.movieTmbs,
  })
}

const mapDispatchToProps = (dispatch) => ({
  getMovieTmbs: () => dispatch(getMovieTmbs()),
  getMovieTmbsByUserId: (userId) => dispatch(getMovieTmbsByUserId(userId)),
  getMovieTmbsByGenreId: (genreId) => dispatch(getMovieTmbsByGenreId(genreId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieListComp)

