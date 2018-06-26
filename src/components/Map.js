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
      _defaultLocations: [
        { 
          // red elephant
          lat: 37.9941591,
          lng: 23.7599304
        },
        {
          // belpaese
          lat: 37.9685022,
          lng: 23.7280238
        },
        { 
          // to karotsi tou giatrou
          lat: 37.9772691,
          lng: 23.7256247
        },
        {
          // parlo
          lat: 37.9991995,
          lng: 23.7699747
        },
        {
          lat: 38.0227292,
          lng: 23.7955143
        }
    ],


    };
  }
  
  render() {

    const _lat = 37.983810;
    const _lng = 23.727539;

    const _defaultLocations = this.state._defaultLocations;


    return (
      <div className="map-container">
        <GoogleMap
          defaultZoom={15}
          defaultCenter={{ lat: _lat, lng: _lng }}>
          
          {
            _defaultLocations.map( (p,i) => <Marker
                                              key={i}
                                              position={{ lat: p.lat, lng: p.lng }}
                                            />)
          }

          
        </GoogleMap>
      </div>
    )

  }

}

export default withGoogleMap(Map)
