
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Container
import AppContainer from './containers/AppContainer'

// reducers
import Reducer from './reducers/AppReducer'

// InitialState
const initialState = {
  value: null,
}

// InitialStore
const store = createStore(Reducer, initialState)

// InitialDOM
const content = document.querySelector('.content')

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  content
)
