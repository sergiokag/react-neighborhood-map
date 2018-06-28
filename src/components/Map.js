// core
import React from 'react'

// libs 
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"
import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox"

class Map  extends React.Component {

  constructor(props) {
    super(props);
    console.dir(props)
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

    const _defaultLocations = this.state._defaultLocations;


    return (
      <div className="map-container">
        <GoogleMap
          defaultZoom={13}
          center={this.getCenter()}>
          
          {
            _defaultLocations.map( (p,i) => <Marker
                                              key={i}
                                              position={{ lat: p.lat, lng: p.lng }}>

                                                {<InfoBox
                                                  // check https://github.com/tomchentw/react-google-maps/issues/753
                                                  // onCloseClick={}
                                                  options={{ closeBoxURL: ``, enableEventPropagation: true }}>

                                                  <div style={{ backgroundColor: `yellow`, opacity: 0.75, padding: `12px` }}>
                                                    <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                                                      Hello, Kaohsiung!
                                                    </div>
                                                  </div>
                                                  
                                                </InfoBox>}
                                                
                                            </Marker>
                                            )
          }

          
        </GoogleMap>
      </div>
    )

  }

}

export default withGoogleMap(Map);
