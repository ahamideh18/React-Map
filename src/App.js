import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Store from './state-managment/state'

import MyMapComponent from './components/map/map.component'
import Header from './components/navbar/navbar.component'

function App() {
  return (
    <Store>
        <Header />
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDDnTjCHpmyXRTwhORZchGUk-4ifpA9y4M&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
    </Store>
  );
}

export default App;

