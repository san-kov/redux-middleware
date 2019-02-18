export const logger = () => next => action => {
  const actionType =
    action.payload instanceof Promise ? 'async action' : 'simple action'
  console.log(`[logger]: ${actionType}`, action)

  next(action)
}

export const asyncMiddleware = ({ dispatch }) => next => async action => {
  const payload = action.payload

  if (payload instanceof Promise) {
    payload.then(response => dispatch({ ...action, payload: response.data }))
  } else {
    next(action)
  }
}
