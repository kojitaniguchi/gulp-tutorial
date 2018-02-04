import { createActions } from 'redux-actions'
import { SEND_VALUE, REQUEST_IMAGE, SUCCESS_USER, FAILURE_USER } from './actionTypes.jsx'

const actions = createActions(
    {
        SEND_VALUE : value => value,
        SUCCESS_USER : data => data,
        REQUEST_IMAGE : keyword => keyword,
        FAILURE_USER : erorr => erorr
    }
)

export default actions
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
