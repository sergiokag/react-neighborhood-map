import React from 'react'

export default class Main extends React.Component {
  

  componentDidMount() {

  }
  
  render() {
    return (
      <main 
        className="main-region"
        role='main'>
  
        <div className="map-container">
          <div id="map"></div>       
        </div>

      </main>
    )
  }
}
