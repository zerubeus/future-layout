import { Record } from 'immutable';
import { layoutActions } from './actions';

export const layoutState = new Record({
  layout: 'There is no profile yet'
});

export function layoutReducer(state = new layoutState(), {payload, type}) {
  switch (type) {
    case layoutActions.LAYOUT_MODEL_RECEIVED:
      return state.merge({
        layout: payload
      });  
    default:
      return state;
  }
}