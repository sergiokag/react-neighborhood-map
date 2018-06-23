import React from 'react'

export default class Header extends React.Component {

  changeMenuStatus () {
    this.props.parentHandleMenuFn(!this.props.parentMenuStatus);

    setTimeout(()=>{
      const _nav = document.querySelector('#main-menu');
      console.log(_nav)
      _nav.focus()
    },500);
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
