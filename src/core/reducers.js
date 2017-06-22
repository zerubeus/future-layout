import { combineReducers } from 'redux';
import { browserReducer } from './browser';


export default combineReducers({
  browser: browserReducer,
});
