import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas.jsx'

// reducers
import Reducers from './../reducers/AppReducer.jsx'

// sagamiddleware
const sagamiddleware = createSagaMiddleware()

// InitialStore
const store = createStore(
  Reducer,
  applyMiddleware(
    sagamiddleware, logger()
  )
)
sagaMiddleware.run(rootSaga)

export default store
