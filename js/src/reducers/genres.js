import { GET_GENRES } from '../actionTypes'

const initialState = []

const genres = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return action.payload
    default:
      return state
  }
}

export default genres

