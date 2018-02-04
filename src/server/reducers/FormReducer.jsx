/* Reducersの実装 */
import { handleActions } from 'redux-actions'
import actions from  './../actions/actions.jsx'

const initialState = {
    value : '',
}

// 第一引数はreducerの設定を入れたオブジェクト
// 第二引数は初期stateオブジェクト
const formReducers = handleActions({
     // キーについて
     // switchで書く場合のアクションタイプ(文字列)をオブジェクトのキにする
     // オブジェクトのキーに[]で囲んだ変数を入れると、文字列と判定され、toString() が呼ばれる
     // createActionsで作られたアクションはtoStringでアクションタイプを返すので、キーにできる
    [actions.sendValue] : (state, action) => ({
        state,
        value : action.payload,
    }),
}, initialState)

export default formReducers

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
