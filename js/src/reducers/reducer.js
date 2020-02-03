import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import  movie from './movie'
import  movieTmbs from './movieTmbs'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    movie,
    movieTmbs
})

export default createRootReducer

