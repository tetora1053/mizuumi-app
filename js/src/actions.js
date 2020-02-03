import { GET_MOVIE_BY_ID, GET_MOVIES, GET_MOVIES_BY_USER_ID } from './actionTypes'
import axios from 'axios'

export const getMovieById = (id) => {
  return (dispatch, getState) => {
    const url = "http://160.16.196.72:1323/movies/" + id
    axios.get(url).then(res => {
      console.log(res.data)
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

