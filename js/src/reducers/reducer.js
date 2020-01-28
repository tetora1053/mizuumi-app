import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { handleChangeSearchId } from './handleChangeSearchId'
import  movie from './movie'
import  movies from './movies'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    handleChangeSearchId,
    movie,
    movies
})

export default createRootReducer

