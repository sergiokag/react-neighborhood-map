// core
import React from 'react'

// libs 
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow 
} from "react-google-maps"

class Map  extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      indexItem: null,
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

  componentDidMount() {
    // const params = {
    //   client_id: '1V340QFFYS0YJDOF01YIVZUYB5B1PB0RRL2G4FMS2ZMBNQFD',
    //   client_secret: 'JVUFVZJ35JTNRIGL303QL4G0JSNXA00PWWRR4F5ZSPE2R4PO',
    //   ll: '40.7243,-74.0018',
    //   query: 'coffee',
    //   v: '20180323',
    //   limit: 1
    // };

    // axios.get(`https://api.foursquare.com/v2/venues/explore`, {
    //   params
    // }).then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
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

  handleToggleOpen = (index) => {
    this.setState({
      indexItem: index
    });
  }
  
  handleToggleClose = () => {
    this.setState({
      indexItem: null
    });
  }
  
  render() {

    let _defaultLocations;
    
    ( this.props.newMarkers  && this.props.newMarkers.length )
      ?
    _defaultLocations = this.props.newMarkers
      :
    _defaultLocations = this.state._defaultLocations;

    console.log('>>>>>>>>>>>', _defaultLocations)

    return (
      <div className="map-container">
        <GoogleMap
          defaultZoom={13}
          center={this.getCenter()}>
          
          {
            _defaultLocations.map( (p,i) => <Marker
                                              animation = { window.google.maps.Animation.DROP }
                                              key={i}
                                              position={{ lat: p.lat, lng: p.lng }}
                                              onClick={() => this.handleToggleOpen(i)}>

                                              {
                                                  ( this.state.indexItem === i )

                                                    && 

                                                  <InfoWindow 
                                                    onCloseClick={ () => this.handleToggleClose() }>

                                                  <div style={{ backgroundColor: `#ffffff`, padding: `12px` }}>
                                                    <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                                                      Hello, InfoBox!
                                                    </div>
                                                  </div>
                                                  
                                                </InfoWindow>
                                              }
                                                
                                            </Marker>
                                            )
          }

          
        </GoogleMap>
      </div>
    )

  }

}

export default withGoogleMap(Map);
