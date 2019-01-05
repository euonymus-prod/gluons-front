import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import dummy from '../reducers/reducer-dummy'

const reducer = combineReducers({
  dummy
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
export default store
