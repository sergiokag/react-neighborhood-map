// core
import React from 'react'

// libs 
import {
  Marker,
  InfoWindow 
} from "react-google-maps"

export default class PinMarker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      isOpen: props.selectedMarker
    })
  }

  handleToggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    handleToggleClose()  {
      this.setState({
        isOpen: !!this.state.isOpen
    })
  }

  render() {
    return (

                <Marker
                    animation = { window.google.maps.Animation.DROP }
                    position={this.props.position}
                    onClick={() => this.handleToggleOpen()}>

                    {   
                        
                        ( this.state.isOpen )

                          && 

                        <InfoWindow 
                          onCloseClick={ () => this.handleToggleClose() }>

                          <div style={{ backgroundColor: `#ffffff`, padding: `12px` }}>
                            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                              { this.props.position.title }
                            </div>
                          </div>         
                      </InfoWindow>
                    }
                      
                </Marker>

    )
  }

} 
