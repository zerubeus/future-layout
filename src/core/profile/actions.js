export const profileActions = {
    PROFILE_SELECTED: 'PROFILE_SELECTED',

    profileSelected: data => ({
        type: profileActions.PROFILE_SELECTED,
        payload: data,
    }),
};