import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import registerSW from './serviceWorker'

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>, 
document.getElementById('root'));

// registering service worker
registerSW();
