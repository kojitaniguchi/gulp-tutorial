/*::::::::::::::::::::::::::::::::::
 node_modules
:::::::::::::::::::::::::::::::::::*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
/*::::::::::::::::::::::::::::::::::
 Components
:::::::::::::::::::::::::::::::::::*/
import AppContainer from './containers/AppContainer.jsx';

/*::::::::::::::::::::::::::::::::::
 reducers
:::::::::::::::::::::::::::::::::::*/
import reducers from './reducers/AppReducer.jsx';

/*::::::::::::::::::::::::::::::::::
 InitialState
:::::::::::::::::::::::::::::::::::*/
const initialState = {
  value: null,
};
/*::::::::::::::::::::::::::::::::::
 InitialStore
:::::::::::::::::::::::::::::::::::*/
const store = createStore(reducers, initialState);

/*::::::::::::::::::::::::::::::::::
 InitialDOM
:::::::::::::::::::::::::::::::::::*/
let content = document.querySelector('.content');

/*::::::::::::::::::::::::::::::::::
 Rendering
:::::::::::::::::::::::::::::::::::*/
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  content
);
