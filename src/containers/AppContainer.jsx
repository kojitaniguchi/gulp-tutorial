import { connect } from 'react-redux'
import App from './../components/AppComponents.jsx'
import actions from './../actions/actions.jsx'

// Sotreのstateをpropsを通して、Container Componentsで使えるようにする関数
// stateは「value」として
let mapStateToProps = (state) => {
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値
    value: state.value,
    data: state.data,
  }
}

// Storeのdispatchメソッドをpropsを通して、Container Componentsで使えるようにする関数
// dispatchメソッドは「onClick」として
let mapDispatchToProps = (dispatch) => {
  return {
    // dispatcher : dispatchメソッド（引数はAction Creator）
    onClick: (value) => dispatch(actions.send(value)),

  }
}

//AppComponentsで使えるようにする
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
