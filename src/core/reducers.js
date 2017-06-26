import { combineReducers } from 'redux';
import { layoutReducer } from './layout';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  layout: layoutReducer,
  routing: routerReducer,
});