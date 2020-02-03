import React from 'react'
import { connect } from 'react-redux'
import { getMovieById } from '../actions'
import AppComp from '../components/App/App'

const mapDispatchToProps = (dispatch) => ({
  getMovieById: (id) => dispatch(getMovieById(id)),
})

export default connect(
  mapDispatchToProps
)(AppComp)

