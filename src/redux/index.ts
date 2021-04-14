import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
const _window: any = window
const composeEnhancers = _window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ ?
  _window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__() :
  compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
export default store;