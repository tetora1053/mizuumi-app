import { GET_MOVIES } from '../actionTypes'

const initialState = []

const getMovies = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.payload 
    default:
      return state;
  }
}

export { getMovies }

