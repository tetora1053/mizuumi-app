import { INCREMENT_USER_ID, INCREMENT_GROUP_ID, GET_MOVIE_BY_ID, GET_MOVIES, HANDLE_CHANGE_SEARCH_ID, GET_MOVIE_FROM_TMDB, GET_MOVIES_BY_USER_ID } from './actionTypes'
import { TMDB_API_KEY } from '../secret/secret'
import axios from 'axios'

export const incrementUserId = () => ({
  type: INCREMENT_USER_ID
})

export const incrementGroupId = () => ({
  type: INCREMENT_GROUP_ID
})

export const getMovieById = () => {
  return (dispatch, getState) => {
    const id = getState().handleChangeSearchId
    const url = "http://160.16.196.72:1323/movies/" + id
    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIE_BY_ID,
        payload: res.data
      })
    })
  }
}

export const getMovies = () => {
  return (dispatch) => {
    const url = "http://160.16.196.72:1323/movies"
    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIES,
        payload: res.data
      })
    })
  }
}

export const getMoviesByUserId = (user_id) => {
  return (dispatch) => {
    const url = "http://160.16.196.72:1323/users/" + user_id + "/movies"
    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIES_BY_USER_ID,
        payload: res.data
      })
    })
  }
}

export const handleChangeSearchId = (id) => {
  return {
    type: HANDLE_CHANGE_SEARCH_ID,
    searchId: id
  }
}

export const getMovieFromTmdb = () => {
  return (dispatch) => {
    const url = "https://api.themoviedb.org/3/movie/550?api_key=" + TMDB_API_KEY + "&language=ja"
    axios.get(url).then(res => {
      console.log(res.data)
      dispatch({
        type: GET_MOVIE_FROM_TMDB,
        payload: res.data
      })
    })
  }
}

