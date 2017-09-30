/*::::::::::::::::::::::::::::::::::
 node_modules
:::::::::::::::::::::::::::::::::::*/
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

/*::::::::::::::::::::::::::::::::::
 Actions
:::::::::::::::::::::::::::::::::::*/
import FormActions from './actions/FormActions.jsx';

/*::::::::::::::::::::::::::::::::::
 Components
:::::::::::::::::::::::::::::::::::*/
import App from './components/AppComponents.jsx';

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
 // Connect to Redux
:::::::::::::::::::::::::::::::::::*/
// Sotreのstateをpropsを通して、Container Componentsで使えるようにする関数
// stateは「value」として
let mapStateToProps = (state) => {
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値
    value: state.value,
  };
};

// Storeのdispatchメソッドをpropsを通して、Container Componentsで使えるようにする関数
// dispatchメソッドは「onClick」として
let mapDispatchToProps = (dispatch) => {
  return {
    // propsを通して取得する際に使う名前
    onClick(value) {
      // Storeのdispatchメソッド（引数はAction Creator）
      dispatch(FormActions.send(value));
    }
  };
};

//Container componentsでpropsを通してdispatchとstate
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

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
