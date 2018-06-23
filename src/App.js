// core
import React from 'react'

// css
import './App.css'

// components
import Header from './components/Header'
import Main from './components/Main'
import SideMenu from './components/SideMenu'

export default class App extends React.Component { 

  constructor(props) {
    super(props)
    this.state = {
      menuStatus: false
    }
  }

  handleMenuStatus(bool) {
    this.setState({
      menuStatus: bool
    })
  }

  render() {
    return( 
      <div className="site-wrapper">

        <div className="site-inner-wrapper">
          <Header 
            parentMenuStatus={this.state.menuStatus}
            parentHandleMenuFn={this.handleMenuStatus.bind(this)}/>
          <Main />
        </div>

        <SideMenu 
          menuStatus={this.state.menuStatus}
          parentHandleMenuFn={this.handleMenuStatus.bind(this)}/>
      </div>
    )
  }
}
