import React, { createContext, useReducer } from "react";

import Reducer from './reducer'

const initialState = { coords: {lat: 43.6532, lng: -79.3832}, markers: {}, selected: null };
export const Context = createContext(initialState);
const { Provider } = Context;

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    )
};

export default Store;