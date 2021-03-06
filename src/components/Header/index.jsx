import React from 'react'
import Typography from '@material-ui/core/Typography'

import './Header.scss'
import { useHistory, useLocation } from 'react-router-dom'
import { ROUTES } from 'utils/constants'

function Header () {
  const history = useHistory()
  const location = useLocation()

  return (
    <div className="header-container">
      <div id="logo-div" onClick={() => { history.push(ROUTES.postList) }}>
        <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="Company Logo"/>
        <Typography gutterBottom variant="h4" component="h4">
          Technical Test
        </Typography>
      </div>
      <div id="right-container">
        <Typography gutterBottom variant="h5" component="h5" onClick={() => { history.push(ROUTES.postList) }}>
          Posts
        </Typography>
        {!(location.pathname === ROUTES.newPost) &&
          <div id="add-container" onClick={() => { history.push(ROUTES.newPost) }}>
            <img src={process.env.PUBLIC_URL + '/plusSign.svg'} id="add-icon" alt="Add Post"/>
            <h4 id="add-text">Add New Post</h4>
          </div>
        }
      </div>
    </div>
  )
}

export default Header
