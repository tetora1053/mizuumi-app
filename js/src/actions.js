import { GET_MOVIE_BY_ID, GET_MOVIE_TMBS } from './actionTypes'
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

export const getMovieTmbs = () => {
  return (dispatch) => {
    const url = "http://160.16.196.72:1323/movies"
    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIE_TMBS,
        payload: res.data
      })
    })
  }
}

export const getMovieTmbsByUserId = (user_id) => {
  return (dispatch) => {
    const url = "http://160.16.196.72:1323/users/" + user_id + "/movies"
    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIE_TMBS,
        payload: res.data
      })
    })
  }
}

