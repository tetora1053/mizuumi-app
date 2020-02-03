import React from 'react'
import { connect } from 'react-redux'
import { getMovieById } from '../actions'
import MovieComp from '../components/Movie/Movie'

const mapStateToProps = state => {
  return ({
    title: state.movie.title,
    overview: state.movie.overview,
    releaseDate: state.movie.releaseDate,
  })
}

const mapDispatchToProps = (dispatch) => ({
  getMovieById: (id) => dispatch(getMovieById(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieComp)

