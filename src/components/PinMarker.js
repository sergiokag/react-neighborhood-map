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
      isOpen: false,
      tips: []
    }
  }

  componentDidMount(){

      getFourSquareInfo(this.props.position).then( r => {
      
        this.setState({
          tips: r.data.response.venue.tips.groups[0].items
        })

      })

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

                        (this.props.locationId === null) 
                          ? 
                        (

                            ( this.state.isOpen  )

                            && 

                          <InfoWindow 
                            onCloseClick={ () => this.handleToggleClose() }>
                            <div style={{ backgroundColor: `#ffffff`, padding: `12px` }}>
                              <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                                <h2>{ this.props.position.title }</h2>


                                {
                                  ( this.state.tips.length ) 
                                      ?
                                    <div>
                                      <h3>Comments:</h3>  
                                      <ul>
                                        { 
                                            this.state.tips.map( (t, i) => <li key={i}>
                                                                              { t.text ? t.text : 'No tips availiable' }
                                                                          </li> 
                                                            )
                                        }
                                      </ul>
                                    </div>
                                      : 
                                    <p>
                                      No data availiable!
                                    </p>
                                }     



                              </div>
                            </div>         
                          </InfoWindow>                          

                        ) 
                          : 
                        (
                          ( this.state.isOpen  ) && ( this.props.locationId === this.props.id )

                          && 

                        <InfoWindow 
                          onCloseClick={ () => this.handleToggleClose() }>
                          <div style={{ backgroundColor: `#ffffff`, padding: `12px` }}>
                            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                              <h2>{ this.props.position.title }</h2>


                              {
                                ( this.state.tips.length ) 
                                    ?
                                  <div>
                                    <h3>Comments:</h3>  
                                    <ul>
                                      { 
                                          this.state.tips.map( (t, i) => <li key={i}>
                                                                            { t.text ? t.text : 'No tips availiable' }
                                                                        </li> 
                                                          )
                                      }
                                    </ul>
                                  </div>
                                    : 
                                  <p>
                                    No data availiable!
                                  </p>
                              }     



                            </div>
                          </div>         
                        </InfoWindow>                            
                        ) 
                        

                    }
                      
                </Marker>

    )
  }

} 
