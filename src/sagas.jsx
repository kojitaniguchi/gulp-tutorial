import { delay } from 'redux-saga'
import { call, put, fork, take } from 'redux-saga/effects'

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function parseJSON(response) {
  return response.json()
}

function fetchData(keyword) {
  const myRequest = `https://sinatra-api-kojitaniguchi.c9users.io/image/${keyword}`
  fetch(myRequest, {mode: 'cors'} )
  .then(checkStatus)
  .then(parseJSON)
  .then(payload => { payload })
  .catch(error => { error });
}

function* handleRequestImage() {
  while (true) {
    const action = yield take(REQUEST_IMAGE)
    const { payload, error } = yield call(fetchData, action.payload)
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
  yield fork(handleRequestUser)
}
// rootSagaタスクとhandleReauestUserタスクの二つが動いている
