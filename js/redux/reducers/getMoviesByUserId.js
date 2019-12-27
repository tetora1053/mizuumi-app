import { GET_MOVIES_BY_USER_ID } from '../actionTypes'

const initialState = []

const getMoviesByUserId = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_BY_USER_ID:
      return action.payload 
    default:
      return state;
  }
}

export { getMoviesByUserId }

