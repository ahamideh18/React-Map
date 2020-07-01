import React, { useContext, useEffect } from 'react';
import { Context } from '../../state-managment/state'

import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

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

    const allMarkers = () => {
        var allMarkers = [];
        for (const locationSpecs in state.markers) {
            const id = state.markers[locationSpecs].id;
            const location = state.markers[locationSpecs].location;
            const name = state.markers[locationSpecs].name;
            allMarkers.push({ id, location, name })
        }
        return allMarkers;
    }

    return (
        <GoogleMap
            defaultZoom={12}
            defaultCenter={{ lat: 43.6532, lng: -79.3832 }}
            center={state.coords}
            options={options}
            yesIWantToUseGoogleMapApiInternals
        >

            {props.isMarkerShown && allMarkers().map((marker) => {
                return (
                    <Marker key={marker.id}
                        position={marker.location}
                        onClick={() => dispatch({ type: 'SET_SELECTED', payload: marker })}
                    />

                )
            })}

            {state.selected ? (
                <InfoWindow
                    position={{ lat: state.selected.location.lat, lng: state.selected.location.lng }}
                    onCloseClick={() => dispatch({ type: 'SET_SELECTED', payload: null })}
                >
                    <div>
                        <h5>{state.selected.name}</h5>
                    </div>
                </InfoWindow>
            ) : null}

        </GoogleMap>
    )
}
))

export default MyMapComponent;