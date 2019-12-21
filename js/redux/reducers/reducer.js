import { combineReducers } from 'redux'
import incrementUserId from './incrementUserId'
import incrementGroupId from './incrementGroupId'
import { getMovieById } from './getMovieById'
import { getMovies } from './getMovies'
import { handleChangeSearchId } from './handleChangeSearchId'
import { getMovieFromTmdb } from './getMovieFromTmdb'

const rootReducer = combineReducers({
    incrementUserId,
    incrementGroupId,
    getMovieById,
    getMovies,
    handleChangeSearchId,
    getMovieFromTmdb
})

export default rootReducer

