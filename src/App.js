// core
import React from 'react'

// css
import './App.css'

// components
import Header from './components/Header'
import Main from './components/Main'
import SideMenu from './components/SideMenu'

export default class App extends React.Component { 
  render() {
    return( 
      <div className="site-wrapper">

        <div className="site-inner-wrapper">
          <Header />
          <Main />
        </div>

        <SideMenu />

      </div>
    )
  }
}
