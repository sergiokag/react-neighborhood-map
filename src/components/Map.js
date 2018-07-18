// core
import React from 'react'

// check https://tomchentw.github.io/react-google-maps/ for withScriptjs
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
      clickedPin: '',
    };
  }

  componentWillReceiveProps(props) {    
    this.setState({
      clickedPin: props.locationId
    })
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

  clickedPin(id) {
    this.setState({
      clickedPin: id
    })
  }
  
  render() {
    let _defaultLocations;
    
    // Checking for new markers. If not then we get the default locations
    ( this.props.newMarkers  && this.props.query  && this.props.newMarkers.length > 0 )
      ?
    _defaultLocations = this.props.newMarkers
      :

    (
      ( this.props.newMarkers && this.props.query && this.props.newMarkers.length === 0 )
        ?
       _defaultLocations = []
       :
      _defaultLocations = this.state._defaultLocations
    )

    return (
      <div className="map-container">
        <GoogleMap
          defaultZoom={13}
          center={this.getCenter()}>
          
          {
            _defaultLocations.map( (p,i) => <PinMarker
                                              parentClickedFn={this.clickedPin.bind(this)}
                                              isOpen={ 
                                                this.state.clickedPin === p['v_id'] 
                                                  ||
                                                false
                                              }
                                              id={p['v_id']}
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
