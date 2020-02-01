import { GET_MOVIE_BY_ID } from '../actionTypes'

const initialState = {}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return Object.assign({}, state, {
        id: action.payload.id,
        title: action.payload.title,
        releaseDate: action.payload.releaseDate
      })
    default:
      return state
  }
}

export default movie

