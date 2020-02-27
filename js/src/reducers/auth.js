import { AUTH_LOGIN, LOGOUT } from '../actionTypes'

const initialState = {
  isAuth: false,
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return Object.assign({}, state, {
        isAuth: true
      })
    case LOGOUT:
      return Object.assign({}, state, {
        isAuth: false
      })
    default:
      return state
  }
}

export default auth

