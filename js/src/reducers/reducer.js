import { combineReducers } from 'redux'
import incrementUserId from './incrementUserId'
import incrementGroupId from './incrementGroupId'
import { handleChangeSearchId } from './handleChangeSearchId'
import  movie from './movie'
import  movies from './movies'

const rootReducer = combineReducers({
    incrementUserId,
    incrementGroupId,
    handleChangeSearchId,
    movie,
    movies
})

export default rootReducer

