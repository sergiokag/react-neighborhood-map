// core
import React from 'react'

// libs 
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";


class Map  extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {

    const _lat = 37.983810;
    const _lng = 23.727539;

    return (
      <div className="map-container">
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: _lat, lng: _lng }}>
          
          <Marker
            position={{ lat: _lat, lng: _lng }}
          />
          
        </GoogleMap>
      </div>
    )

  }

}

export default withGoogleMap(Map)
