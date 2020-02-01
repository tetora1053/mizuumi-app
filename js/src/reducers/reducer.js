import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import  movie from './movie'
import  movies from './movies'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    movie,
    movies
})

export default createRootReducer

