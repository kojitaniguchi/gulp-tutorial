
import { call, put, fork, take } from 'redux-saga/effects'
import 'babel-polyfill'
import api from './api.jsx'
import actions from  './../actions/actions.jsx'

function* requestImage() {
  while (true) {
    const action = yield take('REQUEST_IMAGE')
    const { payload, error } = yield call(api.fetchData, action.payload.keyword)
    if (payload && !error) {
      yield put(actions.successUser(payload))
    } else {
      yield put(actions.failureUser(error))
    }
  }
}

export default function* rootSaga() {
// fork作用を使ってredux-sagaに別タスクの起動
// yieldを使ってredux-sagaの実行環境にコードに値を渡す
  yield fork(requestImage)
}
// rootSagaタスクとrequestImageタスクの二つが動いている
