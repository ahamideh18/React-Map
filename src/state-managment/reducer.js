const Reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COORDS':
            return {
                ...state,
                coords: action.payload
            }
        case 'ADD_MARKERS':
            return {
                ...state,
                markers: action.payload
            }
        case 'SET_SELECTED':
            return {
                ...state,
                selected: action.payload
            }
        default:
            throw new Error();
    }
}

export default Reducer;