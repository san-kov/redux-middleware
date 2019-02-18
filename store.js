import { createStore, applyMiddleware } from 'redux'
import { weatherReducer } from './reducer'
import { logger, asyncMiddleware } from './middleware'

const store = createStore(
  weatherReducer,
  applyMiddleware(logger, asyncMiddleware)
)

export default store
