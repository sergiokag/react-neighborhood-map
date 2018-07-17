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
      menuStatus: false,
      locationId: null
    }
  }
  
  componentDidMount() {
    this.focusMenuBtn()
  }
  
  focusMenuBtn() {
    const _btn = document.querySelector('#open-menu-btn');
    _btn.focus();  
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
      locationId: id
    })
  }

  handleSearchTerm(term){
    this.setState({
      query: term
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
            query={this.state.query}
            locationId={this.state.locationId}
            parentResults={this.state.results} />

        </div>

        <SideMenu 
          parentClearInfo={()=> {
            this.setState({
              openInfo: false,
              locationId: null
            })
          }}
          parentHandleSearchTerm={this.handleSearchTerm.bind(this)}
          parentHandleInfoFn={this.handleInfo.bind(this)}
          parentHandleResultsFn={this.handleResults.bind(this)}
          menuStatus={this.state.menuStatus}
          parentHandleMenuFn={this.handleMenuStatus.bind(this)}/>
      </div>
    )
  }
}
