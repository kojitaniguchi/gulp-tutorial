import { delay } from 'redux-saga'
import { call, put, fork, take } from 'redux-saga/effects'
import api from './api'

function* handleRequestImage() {
  while (true) {
    const action = yield take(REQUEST_IMAGE)
    const { payload, error } = yield call(api.fetchData, action.payload)
    if (payload && !error) {
      yield put(successUser(payload))
    } else {
      yield put(failureUser(error))
    }
  }
}

export default function* rootSaga() {
// fork作用を使ってredux-sagaに別タスクの起動
// yieldを使ってredux-sagaの実行環境にコードに値を渡す
  yield fork(handleRequestImage)
}
// rootSagaタスクとhandleReauestUserタスクの二つが動いている
