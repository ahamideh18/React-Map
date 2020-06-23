const Reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COORDS':
            return {
                ...state,
                payload: action.payload,
            }
        default:
            throw new Error();
    }
}

export default Reducer;