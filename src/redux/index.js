import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import counters from './modules/counters'

const reducer = combineReducers({
  counters,
})

const middleware = applyMiddleware(thunk)

export default function createAppStore(initialValue = {}) {
  return createStore(reducer, initialValue, middleware)
}
