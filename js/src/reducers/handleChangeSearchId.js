import { HANDLE_CHANGE_SEARCH_ID } from '../actionTypes'

const initialState = 1

const handleChangeSearchId = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_CHANGE_SEARCH_ID:
      return action.searchId
    default:
      return state
  }
}

export { handleChangeSearchId }

