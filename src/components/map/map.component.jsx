import React, { useContext } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { Context } from '../../state-managment/state'

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    const [state, dispatch] = useContext(Context);
    console.log(Context)
    return (
        <Context.Provider value={state}>
            <GoogleMap
                defaultZoom={8}
                defaultCenter={state}
                defaultOptions={{
                    scrollwheel: true,
                    fullscreenControl: false,
                    mapTypeControl: false
                }}
            >
                {props.isMarkerShown && <Marker position={state} />}
            </GoogleMap>
        </Context.Provider>
    )
}
))

export default MyMapComponent;