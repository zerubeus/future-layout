import { Record } from 'immutable';
import { menuActions } from './actions';


export const topPosition = new Record({
  topPosition: null,
});


export function menuReducer(state = new topPosition(), {payload, type}) {
  switch (type) {
    case menuActions.CHANGE_TOP_POSITION:
      return state.set('topPosition', payload);
    default:
      return state;
  }
}