export const layoutActions = {
    LAYOUT_MODEL_RECEIVED: 'LAYOUT_MODEL_RECEIVED',
    PROFILE_SELECTED: 'PROFILE_SELECTED',

    layoutModelReceived: data => ({
        type: layoutActions.LAYOUT_MODEL_RECEIVED,
        payload: data,
    }),

    profileSelected: data => ({
        type: layoutActions.PROFILE_SELECTED,
        payload: data,
    }),
};