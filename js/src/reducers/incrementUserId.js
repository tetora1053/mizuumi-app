import { INCREMENT_USER_ID } from '../actionTypes'

const initialState = {
  userId: 1
}

const incrementUserId = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_USER_ID:
      return Object.assign({}, state, {
        userId: state.userId + 1
      })
    default:
      return state;
  }
}

export default incrementUserId

