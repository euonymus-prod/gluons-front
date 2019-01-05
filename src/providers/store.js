import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authToken from '../reducers/reducer-authToken'
import user      from '../reducers/reducer-user'

const reducer = combineReducers({
  authToken,
  user
})
const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
export default store
