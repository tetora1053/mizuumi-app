import { HANDLE_CHANGE_SEARCH_ID, GET_MOVIE_BY_ID, GET_MOVIE_FROM_TMDB, GET_MOVIES, GET_MOVIES_BY_USER_ID } from './actionTypes'
import { TMDB_API_KEY } from '../secret/secret'
import axios from 'axios'

export const handleChangeSearchId = (id) => {
  return {
    type: HANDLE_CHANGE_SEARCH_ID,
    searchId: id
  }
}
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

export const getMovieFromTmdb = () => {
  return (dispatch) => {
    const url = "https://api.themoviedb.org/3/movie/550?api_key=" + TMDB_API_KEY + "&language=ja"

    /* tmp start */
    // const url = "https://api.themoviedb.org/3/search/movie"
    // axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    // axios.get(url, {
    //   params: {
    //       query: "アンパンマン",
    //       page: 1,
    //       language: 'ja-JA',
    //       api_key: TMDB_API_KEY
    //   }
    /* tmp end */

    axios.get(url).then(res => {
      console.log(res.data)
      dispatch({
        type: GET_MOVIE_FROM_TMDB,
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

    /* tmp start */
    // const searchId = getState().handleChangeSearchId
    // const id = ( searchId > 1 ) ? searchId : user_id 

    // const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + TMDB_API_KEY + "&language=ja"
    /* tmp end */ 

    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIES_BY_USER_ID,
        payload: res.data
      })
    })
  }
}

