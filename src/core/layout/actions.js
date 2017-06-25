export const layoutActions = {
    LAYOUT_MODEL_RECEIVED: 'LAYOUT_MODEL_RECEIVED',

    layoutModelReceived: data => ({
        type: layoutActions.LAYOUT_MODEL_RECEIVED,
        payload: data,
    }),
};