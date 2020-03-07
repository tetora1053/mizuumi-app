import { GET_GENRES, CHANGE_CURRENT_GENRE_ID } from '../actionTypes'

const initialState = {
  genreList: [],
  currentId: "all",
}

const genres = (state = initialState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return Object.assign({}, state, {
        genreList: action.payload
      })
    case CHANGE_CURRENT_GENRE_ID:
      return Object.assign({}, state, {
        currentId: action.payload
      })
    default:
      return state
  }
}

export default genres

