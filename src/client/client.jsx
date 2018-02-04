// react関連-----------------------------
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

// Container
import AppContainer from './components/clientAppContainer.jsx'

// Store
import { store, sagaMiddleware, rootSaga } from './../assets/store/store.jsx'
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
