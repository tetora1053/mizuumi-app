import { GET_MOVIE_BY_ID } from '../actionTypes'

const initialState = {
  title: "Shining",
  released: 1980
}

const getMovieById = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_BY_ID:
      return Object.assign({}, state, {
        title: action.payload.title,
        released: action.payload.released
      })
    default:
      return state;
  }
}

export { getMovieById }

