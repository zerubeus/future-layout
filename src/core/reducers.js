import { combineReducers } from 'redux';
import { layoutReducer } from './layout';
import { profileReducer } from './profile';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  layout: layoutReducer,
  profile: profileReducer,
  routing: routerReducer,
});