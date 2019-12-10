import { createStore } from 'redux'
import incrementId from './reducers/reducer'

const store = createStore(incrementId)
export default store

