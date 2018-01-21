import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Container
import AppContainer from './containers/AppContainer.jsx'

// Store
import { createStore, applyMiddleware } from 'redux'

// sagaMiddleware
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/sagas.jsx'

// reducers
import Reducers from './reducers/AppReducer.jsx'

const sagaMiddleware = createSagaMiddleware()
const logger = createLogger()
const store = createStore(Reducers, applyMiddleware(sagaMiddleware, logger))
sagaMiddleware.run(rootSaga)

// InitialDOM
const content = document.querySelector('.content')

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  content
)
