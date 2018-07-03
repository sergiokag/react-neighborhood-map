// core
import React from 'react'

// libs
import _ from 'lodash'
import { getLocation } from '../api'

export default class SideMenu extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      locationList : []
    };

  }

  changeMenuStatus () {
    this.props.parentHandleMenuFn(!this.props.menuStatus);
    document.querySelector('#open-menu-btn').focus();
  }

  searchLocation (e) {
    e.persist();
    const _obj = {};
    let _value = this.textVal.value;

    if(!_value) {
      console.log('no results');
      return;
    }

    getLocation(_value)
      .then( v => {
        
        _obj.formatted_address = v.formatted_address;
        _obj.location = v.geometry.location;

        return this.setState({
          locationList:[_obj]
        },
        () => console.log(this.state)
      )

      })
      .catch( err => console.error(err) );

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

          <input type='text'
            onChange={  _.debounce( this.searchLocation.bind(this) , 1000)  }
            ref={(input) => { this.textVal = input }} />

            
                { locationList.length 
                    ? 
                  (
                    <ul 
                      aria-label="places"
                      className='results-list'>
                      { locationList.map((l, i) => {

                        return <li key={i}>
                          <p>
                            { l.formatted_address }
                          </p>
                        </li>

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
