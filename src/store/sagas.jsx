import { delay } from 'redux-saga'
import { call, put, fork, take } from 'redux-saga/effects'
import 'babel-polyfill'
import fetchData from './api.jsx'
import actions from './../actions/actions.jsx'

function* requestImage() {
    const action = yield take('REQUEST_IMAGE')
    const data = yield call(fetchData, action.payload)
    if (data !== "error") {
      debugger
      yield put(actions.successUser(data))
    } else {
      const error = "画像の取得に失敗しました"
      debugger
      yield put(actions.failureUser(error))
    }
}

function* getRequestImageAction() {
  yield takeEvery('REQUEST_IMAGE', requestImage)
}

export default function* rootSaga() {
// fork作用を使ってredux-sagaに別タスクの起動
// yieldを使ってredux-sagaの実行環境にコードに値を渡す
  yield fork(requestImage)
}
// rootSagaタスクとrequestImageタスクの二つが動いている
