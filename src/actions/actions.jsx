import { createAction } from 'redux-actions'
import types from './actionTypes.jsx'

const SEND = 'SEND'
const REQUEST_IMAGE = 'REQUEST_IMAGE'
const SUCCESS_USER = 'SUCCESS_USER'
const FAILURE_USER = 'FAILURE_USER'

export default createAction(
    {
        SEND : (value) => { value : value},
        SUCCESS_USER : (data) => { data : data},
        REQUEST_IMAGE : (keyword) => { keyword : keyword},
        FAILURE_USER : (erorr) => { error : erorr}
    }
)
// /* Actionsの実装 */
// // Action名の定義
// const send = 'SEND'
// // Action Creators
// export default {
//   send(value) {
//     // Action
//     return {
//       type: SEND,
//       value,
//     }
//   },
// }
