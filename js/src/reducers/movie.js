import { GET_MOVIE_BY_ID } from '../actionTypes'

const initialState = {
  id: 0,
  title: "",
  overview: "",
  releaseDate: "",
  genres: ["drama", "comedy"]
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return Object.assign({}, state, {
        id: action.payload.id,
        title: action.payload.title,
        overview: action.payload.overview,
        releaseDate: action.payload.releaseDate,
        genres: action.payload.genres
      })
    default:
      return state
  }
}

export default movie

