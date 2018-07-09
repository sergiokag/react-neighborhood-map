// core
import React from 'react'

// libs 
import {
  Marker,
  InfoWindow 
} from "react-google-maps"

import { getFourSquareInfo } from '../api/index'

export default class PinMarker extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  componentDidMount(){
    //getFourSquareInfo(37.9660359, 23.7256045).then( r => console.log(r))
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
                              <h2>{ this.props.position.title }</h2>
                              <p>
                                { 
                                  // getFourSquareInfo(
                                  //   this.props.position.lat,
                                  //   this.props.position.lng )
                                  'testing'
                                }
                              </p>

                            </div>
                          </div>         
                        </InfoWindow>
                    }
                      
                </Marker>

    )
  }

} 
