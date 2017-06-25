import { combineReducers } from 'redux';
import { layoutReducer } from './layout';

export default combineReducers({
  layout: layoutReducer,
});
