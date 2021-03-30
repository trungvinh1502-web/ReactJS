const actions = {
    COUNT_INCREMENT: "COUNT_INCREMENT",
    COUNT_DECREMENT: " COUNT_DECREMENT",

    counterIncrement: (params) => ({
        type: actions.COUNT_INCREMENT,
        params: params
    }),
    counterDecerment: (params) => ({
        type: actions.COUNT_DECREMENT,
        params: params
    }),
}
export default actions;