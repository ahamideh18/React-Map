import React, { useContext, useEffect } from 'react';
import { Context } from '../../state-managment/state'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'

import mapStyles from './map.styles'

const options = {
    styles: mapStyles,
    scrollwheel: true,
    fullscreenControl: false,
    mapTypeControl: false,
    streetViewControl: false
}

const MyMapComponent = withScriptjs(withGoogleMap((props) => {
    const { state, dispatch } = useContext(Context);
    useEffect(() => {
        const markersRef = firestore.collection('locations');
        markersRef.onSnapshot(async snapshot => {
            const markersObj = convertCollectionsSnapshotToMap(snapshot);
            dispatch({ type: 'ADD_MARKERS', payload: markersObj })
        })
    }, [dispatch])

    const displayMarkers = () => {
        var allMarkers = [];
        for (const locationSpecs in state.markers) {
            const id = state.markers[locationSpecs].id;
            const location = state.markers[locationSpecs].location;
            allMarkers.push(<Marker key={id} position={location} />)
        }
        return allMarkers
    }


    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
            center={state.coords}
            options={options}
            yesIWantToUseGoogleMapApiInternals
        >
            {props.isMarkerShown && displayMarkers()}
            {/* {props.isMarkerShown && <Marker position={state.coords} />} */}
        </GoogleMap>
    )
}
))

export default MyMapComponent;