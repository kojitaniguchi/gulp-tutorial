import { connect } from 'react-redux'
import serverApp from './serverAppComponents.jsx'
import actions from './../../assets/actions/actions.jsx'

// Sotreのstateをpropsを通して、Container Componentsで使えるようにする関数
let mapStateToProps = (state) => {
  return {
    value: state.formReducers.value,
    data: state.imageReducers.data,
    error: state.imageReducers.error,
  }
}

// Storeのdispatchメソッドをpropsを通して、Container Componentsで使えるようにする関数
let mapDispatchToProps = (dispatch) => {
  return {

    // dispatcher : dispatchメソッド（引数はAction Creator）
    handleClick: (value) => {
      console.log(actions.sendValue(value)),
      dispatch(actions.sendValue(value))
    },
    getImage: (keyword) => {
    dispatch(actions.requestImage(keyword))
    }

  }
}

//AppComponentsで使えるようにする
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(serverApp)

export default AppContainer
