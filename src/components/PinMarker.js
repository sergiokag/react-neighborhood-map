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
      isOpen: this.props.isOpen,
      errors: null,
      counter: 0,
      tips: []
    }
  }

  componentDidMount(){

      getFourSquareInfo(this.props.position).then( r => {
        return r.json()
      })
      .then( data => {
        this.setState({
          tips: data.response.venue.tips.groups[0].items
        })
      })
      .catch(err => {
        this.setState({
          errors: err
        })
      })

  }

  componentWillReceiveProps(props) {
    this.setState({
      isOpen: props.selectedMarker
    })
  }

  handleToggleOpen() {
    // first close all the other pins
    
    this.props.clearAll();
    ++this.state.counter;

    console.log(this.state.counter)

    if (this.state.counter % 2 !== 0) {
      //then open the Infowindow
      console.log('opened');
      this.setState({
        isOpen: true
      });
    }
    else {
      console.log('closed');
      this.setState({
        isOpen: false
      });
    }
    


  }

  handleClose()  {
  this.setState({
      isOpen: false
  });

  window.document.querySelector('.results-list').focus()
}

  render() {
    return (

                <Marker
                    animation = {
                      (
                        ( this.props.selectedMarkerFromList && this.state.isOpen ) || this.state.isOpen
                      )
                        ?
                      window.google.maps.Animation.BOUNCE
                        :
                      null
                     }
                    position={this.props.position}
                    onClick={() => this.handleToggleOpen()}>


                    {/*
                         I have duplicate the infowindow in order to
                         show infowindow for the defaults and the markers
                         from the api.

                         This is not the best solution but I get the results I want. Need to refactor it.
                    */}

                    {

                        (this.props.locationId === null)
                          ?
                        (

                            ( this.state.isOpen  )

                            &&

                          <InfoWindow
                            onCloseClick={ () => this.handleClose() }>
                            <div
                                id="infoWindow" tabIndex='-1' style={{ backgroundColor: `#ffffff`, padding: `12px` }}
                                onKeyPress={ () => this.handleClose() }>
                              <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                                <h2>{ this.props.position.title }</h2>


                                {
                                  ( !this.state.errors )
                                      ?
                                    <div>
                                      <h3>Comments:</h3>
                                      {
                                        ( this.state.tips.length )
                                          ?
                                          <ul  style={{ listStyleType: `decimal`, paddingLeft: `15px` }}>
                                          {
                                              this.state.tips.map( (t, i) => <li key={i}>
                                                                                { t.text ? t.text : 'No tips availiable' }
                                                                            </li>
                                                                )
                                          }
                                        </ul>
                                          :
                                          <ul  style={{ listStyleType: `decimal`, paddingLeft: `15px` }}>
                                          <li>No comments have been added yet</li>
                                        </ul>
                                      }
                                    </div>
                                      :
                                    <p>
                                      Daily call quota exceeded. You have sent too many requests in a given amount of time.
                                    </p>
                                }



                              </div>
                            </div>
                          </InfoWindow>

                        )
                          :
                        (
                          ( this.state.isOpen  && this.props.selectedMarker )

                          &&

                        <InfoWindow
                          onCloseClick={ () => this.handleClose() }>
                          <div
                            id="infoWindow" tabIndex='-1' style={{ backgroundColor: `#ffffff`, padding: `12px` }}
                            onKeyPress={ () => this.handleClose() }>

                            <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
                              <h2>{ this.props.position.title }</h2>


                                {
                                  ( !this.state.errors )
                                      ?
                                    <div>
                                      <h3>Comments:</h3>
                                      {
                                        ( this.state.tips.length )
                                          ?
                                          <ul  style={{ listStyleType: `decimal`, paddingLeft: `15px` }}>
                                          {
                                              this.state.tips.map( (t, i) => <li key={i}>
                                                                                { t.text ? t.text : 'No tips availiable' }
                                                                            </li>
                                                                )
                                          }
                                        </ul>
                                          :
                                          <ul  style={{ listStyleType: `decimal`, paddingLeft: `15px` }}>
                                          <li>No comments have been added yet</li>
                                        </ul>
                                      }
                                    </div>
                                      :
                                    <p>
                                      Daily call quota exceeded. You have sent too many requests in a given amount of time.
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
