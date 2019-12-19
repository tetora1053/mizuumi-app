import { combineReducers } from 'redux'
import incrementUserId from './incrementUserId'
import incrementGroupId from './incrementGroupId'
import { getMovieById } from './getMovieById'
import { handleChangeSearchId } from './handleChangeSearchId'

const rootReducer = combineReducers({
    incrementUserId,
    incrementGroupId,
    getMovieById,
    handleChangeSearchId
})

export default rootReducer

