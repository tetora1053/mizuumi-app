import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import  movie from './movie'
import  movieTmbs from './movieTmbs'
import  genres from './genres'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    movie,
    movieTmbs,
    genres
})

export default createRootReducer

