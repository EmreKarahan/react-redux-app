import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import start from './start';

export default combineReducers({
  router: routerReducer,
  counter,
  start,
});
