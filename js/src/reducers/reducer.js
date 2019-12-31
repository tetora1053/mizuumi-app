import { combineReducers } from 'redux'
import { handleChangeSearchId } from './handleChangeSearchId'
import  movie from './movie'
import  movies from './movies'

const rootReducer = combineReducers({
    handleChangeSearchId,
    movie,
    movies
})

export default rootReducer

