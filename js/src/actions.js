import { GET_MOVIE_BY_ID, GET_MOVIE_TMBS, GET_GENRES } from './actionTypes'
import axios from 'axios'

export const getMovieById = (id) => {
  return (dispatch, getState) => {
    const url = "http://api.mizuumi.tetora1053.jp/movies/" + id
    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIE_BY_ID,
        payload: res.data
      })
    })
  }
}

export const getMovieTmbs = () => {
  return (dispatch) => {
    const url = "http://api.mizuumi.tetora1053.jp/movies"
    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIE_TMBS,
        payload: res.data
      })
    })
  }
}

export const getMovieTmbsByUserId = (userId) => {
  return (dispatch) => {
    const url = "http://api.mizuumi.tetora1053.jp/users/" + userId + "/movies"
    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIE_TMBS,
        payload: res.data
      })
    })
  }
}

export const getMovieTmbsByGenreId = (genreId) => {
  return (dispatch) => {
    const url = "http://api.mizuumi.tetora1053.jp/genres/" + genreId + "/movies"
    axios.get(url).then(res => {
      dispatch({
        type: GET_MOVIE_TMBS,
        payload: res.data
      })
    })
  }
}

export const getGenres = () => {
  return (dispatch) => {
    const url = "http://api.mizuumi.tetora1053.jp/genres"
    axios.get(url).then(res => {
      dispatch({
        type: GET_GENRES,
        payload: res.data
      })
    })
  }
}

