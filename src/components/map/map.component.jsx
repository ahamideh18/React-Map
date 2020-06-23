import React, { useContext } from 'react';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { Context } from '../../state-managment/state'

import mapStyles from './map.styles'

const options = {
    styles: mapStyles,
    scrollwheel: true,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false
}

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    const globalState = useContext(Context);

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
            center={globalState.state}
            options={options}
        >
            {props.isMarkerShown && <Marker position={globalState.state} />}
        </GoogleMap>
    )
}
))

export default MyMapComponent;