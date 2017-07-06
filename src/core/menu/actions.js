export const menuActions = {
    CHANGE_TOP_POSITION: 'CHANGE_TOP_POSITION',

    changeTopPosition: data => ({
        type: menuActions.CHANGE_TOP_POSITION,
        payload: data,
    }),
};