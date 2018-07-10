// core
import React from 'react'

export default class Header extends React.Component {

  changeMenuStatus() {
    this.props.parentHandleMenuFn(!this.props.parentMenuStatus);

    // add focus to nav when it appears
    setTimeout(()=>{
      this.trapKeyOnNav();
    },500);

  }

  trapKeyFn(e, elems) {
    
    const _firstTabStop = elems[0];
    const _lastTabStop = elems[elems.length - 1];

    if ( 
          e.shiftKey &&
          e.keyCode === 9 &&
          document.activeElement === _firstTabStop
      ) {

          e.preventDefault();
          _lastTabStop.focus();

    }
    else {

        if (
          e.keyCode === 9 &&
          document.activeElement === _lastTabStop
        ) { 
            e.preventDefault();
            _firstTabStop.focus();
         }
    } 

    
  }
  
  trapKeyOnNav() {
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
