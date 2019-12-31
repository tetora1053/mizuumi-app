import { GET_MOVIE_BY_ID, GET_MOVIE_FROM_TMDB } from '../actionTypes'

const initialState = {
  movie: {
    title: "Shining",
    releaseDate: "1980-01-01"
  },
  movieTmdb: {
    title: "Shining",
    releaseDate: "1980-01-02"
  }
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return Object.assign({}, state, {movie: {
        title: action.payload.title,
        releaseDate: action.payload.release_date
      }})
    case GET_MOVIE_FROM_TMDB:
      return Object.assign({}, state, {movieTmdb: {
        title: action.payload.title,
        releaseDate: action.payload.release_date
      }})
    default:
      return state
  }
}

export default movie

