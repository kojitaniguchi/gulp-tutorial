/* Reducersの実装 */
import { handleAction } from 'redux-actions'
import actions from  './../actions/FormActions.jsx'

const defaultlState = {
    value : null,
    data : null,
    error: null,
};

// 第一引数はreducerの設定を入れたオブジェクト
// 第二引数は初期stateオブジェクト
export default handleAction({
    SEND : (state, action) => ({
        state,
        value : action.payload.value,
    }),
    SUCCESS_USER : (state, action) => ({
        state,
        data : action.payload.data,
    }),
    //If the payload is an instance of an Error object,
    //redux-actions will automatically set action.error to true
    FAILURE_USER : (state, action) => ({
        state,
        error : action.error,
    }),
}, defaultlState);

//
// const formReducer = (state, action) => {
//   switch (action.type) {
//     case 'SEND':
//       return (
//         Object.assign({}, state, {
//         value: action.value,
//         })
//       )
//     break
//     case 'IMAGE':
//     default:
//       return state
//   }
// }
