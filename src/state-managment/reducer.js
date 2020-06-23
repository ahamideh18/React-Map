const Reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COORDS':
            const newState = action.payload;
            return newState;
        default:
            throw new Error();
    }
}

export default Reducer;