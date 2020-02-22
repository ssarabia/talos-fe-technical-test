import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from 'routes'
import './App.scss'

import Footer from 'components/Footer'

function App () {
  return (
    <Router>
      <div className="container">
        <div className="main-section">
          {/* <AppSideNav /> */}
          <div className="content-area">
            <Routes />
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
