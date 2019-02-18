require('babel-polyfill')
import store from './store'
import axios from 'axios'

store.dispatch({
  type: 'MAKE_ASYNC_REQUEST',
  payload: axios.get('https://jsonplaceholder.typicode.com/todos/')
})
