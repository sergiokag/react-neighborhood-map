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

  handleResults(arr) {
    this.setState({
      results: arr
    })
  }

  handleInfo(id) {
    this.setState({
      selectedId: id
    })
  }

  render() {
    return( 
      <div className="site-wrapper">

        <div className="site-inner-wrapper">
          
          <Header 
            parentMenuStatus={this.state.menuStatus}
            parentHandleMenuFn={this.handleMenuStatus.bind(this)}/>

          <Main 
            parentSelected={this.state.selectedId}
            parentResults={this.state.results} />

        </div>

        <SideMenu 
          parentHandleInfoFn={this.handleInfo.bind(this)}
          parentHandleResultsFn={this.handleResults.bind(this)}
          menuStatus={this.state.menuStatus}
          parentHandleMenuFn={this.handleMenuStatus.bind(this)}/>
      </div>
    )
  }
}
