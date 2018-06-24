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

    if(e.keyCode === 9) {

      if(e.shiftKey && document.activeElement === _firstTabStop) {
        e.preventDefault();
        _lastTabStop.focus();
      }

    }
    else {

      if ( document.activeElement === _lastTabStop ) {
        e.preventDefault();
        _firstTabStop.focus();
      }

    } 

    
  }
  
  trapKeyOnNav() {
    
    const focusableElementsString = `a[href], input:not([disabled]), button:not([disabled]), [tabindex='0']`;
    const _nav = document.querySelector('#main-menu');

    const focusableEls = Array.from(_nav.querySelectorAll(focusableElementsString));
    _nav.focus();

    _nav.addEventListener('keydown', (e) => { this.trapKeyFn(e, focusableEls) });

  }

  render() {
    return (
      <header
        className="header-region">
        <button
         className="btn btn-default"
          onClick={this.changeMenuStatus.bind(this)} >
          Open Menu
        </button>
      </header>
    )
  }

}
