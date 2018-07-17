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
