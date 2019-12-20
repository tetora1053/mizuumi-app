import { GET_MOVIE_FROM_TMDB } from '../actionTypes'

const initialState = {
  title: "Shining",
  release_date: 1980
}

const getMovieFromTmdb = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_FROM_TMDB:
      return Object.assign({}, state, {
        title: action.payload.title,
        release_date: action.payload.release_date
      })
    default:
      return state;
  }
}

export { getMovieFromTmdb }

