import { combineReducers } from 'redux';
import { layoutReducer } from './layout';
import { profileReducer } from './profile';
import { menuReducer } from './menu';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  layout: layoutReducer,
  profile: profileReducer,
  menuPosition: menuReducer,
  routing: routerReducer,
});