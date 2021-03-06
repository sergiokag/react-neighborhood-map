// core
import React from 'react'

// component
import SideMenuItem from './SideMenuItem'

// libs
import _ from 'lodash'
import { getLocation } from '../api'

// data
import { defaultLocations } from '../data/locations-list'

export default class SideMenu extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      locationList : defaultLocations
    };

  }

  focusInfoWindow() {
    setTimeout(() => {
      window.document.querySelector('#infoWindow').focus();
      console.dir(window.document.querySelector('#infoWindow'))
    }, 800);
  }

  // taking the response 
  // make it look like the defaultLocations structure
  beautifyResponse (arr) {
    const finalArr = [];
    
    arr.forEach( (el,i,arr) => {
  
      const obj = {};

      obj['v_id'] = el.id;
      obj.title = el.name;
      obj.lat = el.location.lat;
      obj.lng = el.location.lng;

      finalArr.push(obj);

    });

    return finalArr;

  }

  changeMenuStatus () {
    this.props.parentHandleMenuFn(!this.props.menuStatus);
    
    if(!this.props.menuStatus === false) {
      document.querySelector('#open-menu-btn').focus();
    }

  }
  
  searchLocation (e) {
    e.persist();
    
    let _value = this.textVal.value;


    // if there is no values
    // must show a list of the 
    // default locations
    if(!_value) {

      this.setState({
        locationList: defaultLocations
      });

      this.props.parentHandleResultsFn(defaultLocations);
      this.props.parentClearInfo();

      return;
    }

    // get the locations
    let results = [];
    let resultsFromPromise = getLocation(_value)
                              .then( r =>{
                                return r.json()
                              })
                              .then( data => {

                                console.log(data)

                                results = data.response.venues;

                                // need transform data
                                results = this.beautifyResponse(results);

                                this.setState({
                                  locationList: results
                                });

                                this.props.parentHandleResultsFn(results);
                                this.props.parentHandleSearchTerm(_value);

                              })
                              .catch(err => console.log(err));


  }

  render() {

    const locationList = this.state.locationList;

    return (
      <nav
        tabIndex="-1"
        id="main-menu"
        className={`main-menu ${this.props.menuStatus ? 'menu-opened' : '' }`}>
        
        <div className='btn-container'>
          <button
            className="btn btn-default"
            onClick={this.changeMenuStatus.bind(this)} >
            Close Menu
          </button>
        </div>

        <div className='search-container'>

          <input 
            title='Find the best places to eat, drink, shop, or visit in Athens, Greece'
            placeholder='Type in what are you looking for'
            type='text'
            onChange={ _.debounce( this.searchLocation.bind(this) , 1000) }
            ref={(input) => { this.textVal = input }} />

            
                { locationList.length 
                    ? 
                  (
                    <ul 
                      aria-label="places"
                      className='results-list'>

                      { locationList.map((l, i) => {

                        return  <SideMenuItem
                                  location={l}
                                  key={i}
                                  parentHandleInfoFn={this.props.parentHandleInfoFn}
                                  parentFocusInfoWindow={this.focusInfoWindow.bind(this)}
                                />

                      })}
                    </ul>
                  )
                   :
                  (
                    <ul 
                    aria-label="places"
                    className='results-list'/>
                  )
                } 

        </div>  

      </nav>
    )
  }

}
