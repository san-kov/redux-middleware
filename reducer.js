export const weatherReducer = (store = { data: null }, action) => {
  switch (action.type) {
    case 'MAKE_ASYNC_CALL':
      return { ...store, data: action.payload }
    default:
      return store
  }
}
