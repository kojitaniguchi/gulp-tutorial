/*::::::::::::::::::::::::::::::::::
 node_modules
:::::::::::::::::::::::::::::::::::*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

/*::::::::::::::::::::::::::::::::::
 // Container
:::::::::::::::::::::::::::::::::::*/
import AppContainer from './containers/AppContainer.jsx'

/*::::::::::::::::::::::::::::::::::
 reducers
:::::::::::::::::::::::::::::::::::*/
import Reducer from './reducers/AppReducer.jsx';

/*::::::::::::::::::::::::::::::::::
 InitialState
:::::::::::::::::::::::::::::::::::*/
const initialState = {
  value: null,
};
/*::::::::::::::::::::::::::::::::::
 InitialStore
:::::::::::::::::::::::::::::::::::*/
const store = createStore(Reducer, initialState);

/*::::::::::::::::::::::::::::::::::
 InitialDOM
:::::::::::::::::::::::::::::::::::*/
let content = document.querySelector('.content');

/*::::::::::::::::::::::::::::::::::
 Rendering
:::::::::::::::::::::::::::::::::::*/
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  content
);
