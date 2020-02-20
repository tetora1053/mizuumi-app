import React from 'react'
import { connect } from 'react-redux'
import { getGenres, getMovieTmbs, getMovieTmbsByGenreId, handleGenreSelectChange } from '../actions'
import GenreListComp from '../components/GenreList/GenreList'

const mapStateToProps = state => {
  return ({
    genreList: state.genres.genreList,
    currentId: state.genres.currentId,
  })
}

const mapDispatchToProps = (dispatch) => ({
  getGenres: () => dispatch(getGenres()),
  getMovieTmbs: () => dispatch(getMovieTmbs()),
  getMovieTmbsByGenreId: (genreId) => dispatch(getMovieTmbsByGenreId(genreId)),
  handleGenreSelectChange: (genreId) => dispatch(handleGenreSelectChange(genreId)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GenreListComp)

