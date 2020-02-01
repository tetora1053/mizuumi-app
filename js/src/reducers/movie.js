import { GET_MOVIE_BY_ID, GET_MOVIE_FROM_TMDB } from '../actionTypes'

const initialState = {
  movie: {
    id: 1000,
    title: "Shining",
    releaseDate: "1980-01-01"
  },
  movieTmdb: {
    id: 1001,
    title: "Shining",
    releaseDate: "1980-01-02"
  }
}

const movie = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return Object.assign({}, state, {movie: {
        id: action.payload.id,
        title: action.payload.title,
        releaseDate: action.payload.releaseDate
      }})
    case GET_MOVIE_FROM_TMDB:
      return Object.assign({}, state, {movieTmdb: {
        title: action.payload.title,
        releaseDate: action.payload.release_date // APIのレスポンスのプロパティに合わせてrelease_date
      }})
    default:
      return state
  }
}

export default movie

