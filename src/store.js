import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(reducer, composeEnhancers(
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))
