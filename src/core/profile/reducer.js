import { Record } from 'immutable';
import { profileActions } from './actions';


export const selectedProfile = new Record({
  selectedProfile: null,
});


export function profileReducer(state = new selectedProfile(), {payload, type}) {
  switch (type) {
    case profileActions.PROFILE_SELECTED:
      return state.set('selectedProfile', payload);
    default:
      return state;
  }
}
