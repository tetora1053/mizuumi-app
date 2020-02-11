import React from 'react'
import { connect } from 'react-redux'
import { getGenres, getMovieTmbs, getMovieTmbsByGenreId } from '../actions'
import GenreListComp from '../components/GenreList/GenreList'

const mapStateToProps = state => {
  return ({
    genres: state.genres,
  })
}

const mapDispatchToProps = (dispatch) => ({
  getGenres: () => dispatch(getGenres()),
  getMovieTmbs: () => dispatch(getMovieTmbs()),
  getMovieTmbsByGenreId: (genreId) => dispatch(getMovieTmbsByGenreId(genreId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreListComp)

