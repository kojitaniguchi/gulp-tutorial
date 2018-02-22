import { call, put, fork, takeEvery } from 'redux-saga/effects'
import 'babel-polyfill'
import fetchData from './api/fetchData.jsx'
import actions from './../actions/actions.jsx'

// タスクというのはただのGenerator関数で、タスクが返すものはすべてただのオブジェクトである

function* requestImage(action) {
  // callは呼び出し先の関数でPromiseを返す必要がある(api.jsx参照)
  // callはオブジェクトを想定しているので、関数はオブジェクトで返す
  const { data, error } = yield call(fetchData, action.payload)
  if (data && !error) {
    yield put(actions.successUser(data))
  } else {
    yield put(actions.failureUser(error))
  }
}

function* getRequestImageAction() {
  yield takeEvery('REQUEST_IMAGE', requestImage)
}

export default function* rootSaga() {
  // fork作用を使ってredux-sagaに別タスクの起動
  // yieldを使ってredux-sagaの実行環境にコードに値を渡す
  yield fork(getRequestImageAction)
}
// rootSagaタスクとrequestImageタスクの二つが動いている
