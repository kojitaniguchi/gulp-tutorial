/* Reducersの実装 */

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SEND':
      return (
        Object.assign({}, state, {
        value: action.value,
        })
      )
    break
    case 'IMAGE':
    default:
      return state
  }
}

export default formReducer
