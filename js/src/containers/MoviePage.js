import React from 'react'
import { connect } from 'react-redux'
import { getMovieById } from '../actions'
import MoviePageComp from '../components/MoviePage/MoviePage'

const mapStateToProps = state => {
  return ({
    title: state.movie.title,
    releaseDate: state.movie.releaseDate,
  })
}

const mapDispatchToProps = (dispatch) => ({
  getMovieById: (id) => dispatch(getMovieById(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviePageComp)

