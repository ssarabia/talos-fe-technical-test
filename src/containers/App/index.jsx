import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes'

import './App.scss'
import Header from 'components/Header'
import Footer from 'components/Footer'

function App () {
  return (
    <Router>
      <div className="container">
        <div className="content-area">
          <div className="main-section">
            <Header/>
            <Routes />
          </div>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
