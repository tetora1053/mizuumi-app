import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import  movie from './movie'
import  movieTmbs from './movieTmbs'
import  genres from './genres'
import  auth from './auth'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    movie,
    movieTmbs,
    genres,
    auth,
})

export default createRootReducer

