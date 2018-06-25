// core
import React from 'react'

export default class SideMenu extends React.Component {

  changeMenuStatus () {
    this.props.parentHandleMenuFn(!this.props.menuStatus);
    document.querySelector('#open-menu-btn').focus();
  }

  render() {
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

          <input type='text'/>

          <ul 
            aria-label="places"
            className='results-list'>
            {/* waiting for the feed */}
          </ul>  

        </div>  

      </nav>
    )
  }
}
