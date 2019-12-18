import { INCREMENT_USER_ID, INCREMENT_GROUP_ID, GET_MOVIES } from './actionTypes'
import axios from 'axios';

export const incrementUserId = () => ({
  type: INCREMENT_USER_ID
})

export const incrementGroupId = () => ({
  type: INCREMENT_GROUP_ID
})

export const getMovies = () => {
  console.log("getMovies")
  return dispatch => {
    const data = { name: 'Joker', released: '2019' }
    axios.post("http://160.16.196.72:1323/users", data).then(res => {
      console.log(res.data)
      dispatch({
        type: GET_MOVIES,
        payload: res.data
      })
    })
  }
}

