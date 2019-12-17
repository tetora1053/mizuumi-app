import { combineReducers } from 'redux'
import incrementUserId from './incrementUserId'
import incrementGroupId from './incrementGroupId'
import getUser from './getUser'

const rootReducer = combineReducers({
    incrementUserId,
    incrementGroupId,
    getUser
})

export default rootReducer

