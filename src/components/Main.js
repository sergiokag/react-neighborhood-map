// core
import React from 'react'

// component
import Map from './Map'

export default class Main extends React.Component {
  
  constructor(props) {
    super(props)
  }

  componentDidMount() {

  }
  
  render() {
    return (
      <main 
        className="main-region"
        role='main'>

        <Map
          newMarkers={this.props.parentResults}
          containerElement={<div role='application' style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          />

      </main>
    )
  }
}
