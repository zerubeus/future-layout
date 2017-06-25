import { Record } from 'immutable';
import { layoutActions } from './actions';

export const layoutState = new Record({
  layout: {} 
});

export function layoutReducer(state = new layoutState(), {payload, type}) {
  switch (type) {
    case layoutActions.LAYOUT_MODEL_RECEIVED:
      return state.set('layout', payload);  
    default:
      return state;
  }
}