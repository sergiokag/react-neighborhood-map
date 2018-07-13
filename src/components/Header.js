// core
import React from 'react'

export default class Header extends React.Component {
  
  changeMenuStatus() {
    this.props.parentHandleMenuFn(!this.props.parentMenuStatus);

    // add focus to nav when it appears
    setTimeout(()=>{
      this.focusNav();
    },500);

  }
  
  focusNav() {
    const _nav = document.querySelector('#main-menu');
    _nav.focus();
  }

  render() {

    return (
      <header
        className="header-region">
        <button
          tabIndex='0'
          id="open-menu-btn"
          className="btn btn-default"
          onClick={this.changeMenuStatus.bind(this)}>
          Open Menu
        </button>
      </header>
    )
  }

}
