import { combineReducers } from 'redux'
import imageReducers from './imageReducer.jsx'
import formReducers from './FormReducer.jsx'

const Reducers = combineReducers({
  formReducers,
  imageReducers
})

export default Reducers
