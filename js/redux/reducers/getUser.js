import { GET_USER } from '../actionTypes'

const initialState = {
  name: "nanashi",
  email: "nobody@gmail.com"
}

const getUser = (state = initialState, action) => {
  console.log(state)
  switch (action.type) {
    case GET_USER:
      return Object.assign({}, state, {
        name: action.payload.name,
        email: action.payload.email
      })
    default:
      return state;
  }
}

export default getUser

