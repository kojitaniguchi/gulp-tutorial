import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Container
import AppContainer from './containers/AppContainer.jsx'

// Store
 import store from './store/store.jsx'

// InitialDOM
const content = document.querySelector('.content')

// Rendering
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  content
)
