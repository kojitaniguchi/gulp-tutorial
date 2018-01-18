/* Reducersの実装 */
import { handleAction } from 'redux-actions'
import actions from  './FormActions'

const initialState = {
    value : '',
    data : '',
    requestimage: ''
};

// 第一引数はreducerの設定を入れたオブジェクト
// 第二引数は初期stateオブジェクト
export default handleActions({
    [actions.send] : (state, action) => ({
        ...state,
        value : action.payload.value,
    }),
    [actions.successUser] : (state, actions) => ({
        ...state,
        data : action.payload.data,
    }),
    [actions.failureUser] : (state, actions) => ({
        ...state,
        data : '',
    }),
    [actions.requestImage] : (state, actions) => ({
        ...state,
        requestimage : action.payload,
    }),
}, initialState);

export default formReducer

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
