import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducers'
import ReduxThunk from 'redux-thunk'

export default createStore(reducer, compose(
  applyMiddleware(ReduxThunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

// export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) // uncomment to use without Thunk