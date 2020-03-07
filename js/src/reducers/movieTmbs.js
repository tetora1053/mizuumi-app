import { GET_MOVIE_TMBS } from '../actionTypes'

const initialState = []

const movieTmbs = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_TMBS:
      return action.payload
    default:
      return state
  }
}

export default movieTmbs

