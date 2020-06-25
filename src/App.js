import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Store from './state-managment/state'

import MyMapComponent from './components/map/map.component'
import Header from './components/navbar/navbar.component'

// import { addLocations } from './firebase/firebase.utils';

// import markers from './assets/map_data'

import config from './config'

class App extends React.Component {
  // componentDidMount() {
  //     addLocations('locations', markers.locations)
  // }

  render() {
    return (
      <Store>
        <Header />
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${config.API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Store>
    )
  }
}

export default App;

