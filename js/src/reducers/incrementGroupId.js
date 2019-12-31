import { INCREMENT_GROUP_ID } from '../actionTypes'

const initialState = {
  groupId: 1
}

const incrementGroupId = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_GROUP_ID:
      return Object.assign({}, state, {
        groupId: state.groupId + 1
      })
    default:
      return state;
  }
}

export default incrementGroupId

