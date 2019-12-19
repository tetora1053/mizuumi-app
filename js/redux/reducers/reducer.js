import { combineReducers } from 'redux'
import incrementUserId from './incrementUserId'
import incrementGroupId from './incrementGroupId'
import { getMovieById } from './getMovieById'
import { getMovies } from './getMovies'
import { handleChangeSearchId } from './handleChangeSearchId'

const rootReducer = combineReducers({
    incrementUserId,
    incrementGroupId,
    getMovieById,
    getMovies,
    handleChangeSearchId
})

export default rootReducer

