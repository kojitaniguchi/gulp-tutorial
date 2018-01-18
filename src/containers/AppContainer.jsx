import { connect } from 'react-redux'
import App from './../components/AppComponents'
import FormActions from './../actions/FormActions'

// Sotreのstateをpropsを通して、Container Componentsで使えるようにする関数
// stateは「value」として
let mapStateToProps = (state) => {
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値
    value: state.value,
    data: state.sata,
  }
}

// Storeのdispatchメソッドをpropsを通して、Container Componentsで使えるようにする関数
// dispatchメソッドは「onClick」として
let mapDispatchToProps = (dispatch) => {
  return {
    // propsを通して取得する際に使う名前
    onClick(value) {
      // Storeのdispatchメソッド（引数はAction Creator）
      dispatch(FormActions.send(value))
    }
  }
}

//AppComponentsで使えるようにする
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
