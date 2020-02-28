import React from 'react'
import { connect } from 'react-redux'
import { getMovieTmbs, getMovieTmbsByUserId, getMovieTmbsByGenreId, changeCurrentGenreId } from '../actions'
import MovieList from '../components/MovieList/MovieList'

const mapStateToProps = state => {
  return ({
    movieTmbs: state.movieTmbs,
  })
}

const mapDispatchToProps = (dispatch) => ({
  getMovieTmbs: () => dispatch(getMovieTmbs()),
  getMovieTmbsByUserId: (userId) => dispatch(getMovieTmbsByUserId(userId)),
  getMovieTmbsByGenreId: (genreId) => dispatch(getMovieTmbsByGenreId(genreId)),
  changeCurrentGenreId: (genreId) => dispatch(changeCurrentGenreId(genreId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieList)

