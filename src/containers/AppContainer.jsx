import { connect } from 'react-redux';
import App from './../components/AppComponents.jsx'
import FormActions from './../actions/FormActions.jsx';

// Connect to Redux
let mapStateToProps = (state) => {
  window.console.log(state);
  return {
    value: state.value,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onClick(value) {
      dispatch(FormActions.send(value));
    }
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
