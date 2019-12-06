import { combineReducers } from 'redux'
import incrementUserId from './incrementUserId'
import incrementGroupId from './incrementGroupId'

const incrementId = combineReducers({
    incrementUserId,
    incrementGroupId
})

export default incrementId

