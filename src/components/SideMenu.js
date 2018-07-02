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
    let _value = this.textVal.value;

    if(!_value) {
      console.log('no results');
      return;
    }

    const willGetReLocation = getLocation(_value)

    console.log(willGetReLocation)



    // this.setState({
    //   locationList: getLocation('Athens, Greece')
    // }, () => console.log(this.state))

  }

  render() {

    const List = this.state.locationList;

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
            onChange={  _.debounce( this.searchLocation.bind(this) ,500)  }
            ref={(input) => { this.textVal = input }} />

            
                { List.length 
                    ? 
                  (
                    <ul 
                      aria-label="places"
                      className='results-list'>
                      { List.length.map((l, i) => {

                        return <li key={i}>
                          <p>
                            { l.formated_address }
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
