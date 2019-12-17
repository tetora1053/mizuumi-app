import { INCREMENT_USER_ID, INCREMENT_GROUP_ID, GET_USER } from './actionTypes'
import axios from 'axios';

export const incrementUserId = () => ({
  type: INCREMENT_USER_ID
})

export const incrementGroupId = () => ({
  type: INCREMENT_GROUP_ID
})

export const getUser = () => {
  console.log("getUser")
  return dispatch => {
    const data = { name: 'shinoda', email: 'tetora1053@gmail.com' }
    axios.post("http://160.16.196.72:1323/users", data).then(res => {
      console.log(res.data)
      dispatch({
        type: GET_USER,
        payload: res.data
      })
    })
  }
}

