import { combineReducers } from 'redux'
import incrementUserId from './incrementUserId'
import incrementGroupId from './incrementGroupId'
import getMovies from './getMovies'

const rootReducer = combineReducers({
    incrementUserId,
    incrementGroupId,
    getMovies
})

export default rootReducer

