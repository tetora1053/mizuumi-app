import { GET_MOVIES_BY_USER_ID, GET_MOVIES } from '../actionTypes'

const initialState = {
  movies: [],
  userMovies: []
}

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_BY_USER_ID:
      return Object.assign({}, state, {
        userMovies: action.payload
      })
    case GET_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload
      })
    default:
      return state
  }
}

export default movies

