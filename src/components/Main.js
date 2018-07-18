// core
import React from 'react'

// component
import Map from './Map'

export default class Main extends React.Component {

  render() {
    return (
      <main 
        className="main-region">

        <Map
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkV06KWTh709fFp4UpMCGPNNwYrrVbPNU"
          loadingElement={<div style={{ height: `100%` }} />}
          query={this.props.query}
          locationId={this.props.locationId}
          newMarkers={this.props.parentResults}
          containerElement={<div role='application' style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />

      </main>
    )
  }
}
