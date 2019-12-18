import { GET_MOVIES } from '../actionTypes'

const initialState = {
  name: "Shining",
  released: "1980"
}

const getMovies = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case GET_MOVIES:
      return Object.assign({}, state, {
        name: action.payload.name,
        released: action.payload.released
      })
    default:
      return state;
  }
}

export default getMovies

