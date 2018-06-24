import React from 'react'

export default class SideMenu extends React.Component {

  changeMenuStatus () {
    this.props.parentHandleMenuFn(!this.props.menuStatus)
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

          <ul aria-label="places">
            <li>This is the first option</li>
            <li>This is the first option</li>
            <li>This is the first option</li>
            <li>This is the first option</li>
          </ul>  

        </div>  

      </nav>
    )
  }
}