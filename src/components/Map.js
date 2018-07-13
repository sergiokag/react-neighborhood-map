// core
import React from 'react'

// libs 
import {
  withGoogleMap,
  GoogleMap
} from "react-google-maps"

// components
import PinMarker from './PinMarker'

// data
import { defaultLocations } from '../data/locations-list'

class Map  extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      _defaultLocations: defaultLocations ,
    };
  }

  // getCenter functionality
  // from : https://stackoverflow.com/questions/44487215/react-google-maps-how-to-use-fitbounds-panby-panto-pantobounds-public-apis?rq=1
  getCenter = () => {
    this._bounds = new window.google.maps.LatLngBounds();

    this.state._defaultLocations.forEach((marker, index) => {
      const position = new window.google.maps.LatLng(marker.lat, marker.lng);
      this._bounds.extend(position);
    });

    return this._bounds.getCenter();
  }
  
  render() {
    let _defaultLocations;
    
    // Checking for new markers. If not then we get the default locations
    ( this.props.newMarkers  && this.props.newMarkers.length )
      ?
    _defaultLocations = this.props.newMarkers
      :
    _defaultLocations = this.state._defaultLocations;

    return (
      <div className="map-container">
        <GoogleMap
          defaultZoom={13}
          center={this.getCenter()}>
          
          {
            _defaultLocations.map( (p,i) => <PinMarker
                                              locationId={this.props.locationId}
                                              id={p['v_id']}
                                              selectedMarker={this.props.selectedMarker}
                                              key={i}
                                              position={p} /> 
                                  )
          }

          
        </GoogleMap>
      </div>
    )

  }

}

export default withGoogleMap(Map);
