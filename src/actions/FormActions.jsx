import { createAction, handleAction } from 'redux-actions'
import types from './actionTypes'

export default createActions(
    {
        [types.SEND : (value) => { value : value},
        [types.SUCCESS_USER] : (data) => { data : data},
        [types.FAILURE_USER] : (data) => { data : data},
    },
    types.REQUEST_IMAGE,
);
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
