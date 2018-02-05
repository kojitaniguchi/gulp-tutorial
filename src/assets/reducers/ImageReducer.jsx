import { handleActions } from 'redux-actions'
import actions from './../actions/actions.jsx'
import ImageData from './../immutable/models.jsx'

const initialState = {
  data: '',
  error: '',
}

const imageReducers = handleActions({
  [actions.successUser] : (state, action) => ({
      state,
      data : action.payload,
  }),
  // If the payload is an instance of an Error object,
  // redux-actions will automatically set action.error to true
  [actions.failureUser] : (state, action) => ({
      state,
      error : action.payload,
  }),
}, initialState)

export default imageReducers
