import React from 'react'
import { Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import { ROUTES } from 'utils/constants'
import PostList from 'containers/PostList'
import CreatePost from 'containers/CreatePost'
import './routes.scss'

const Routes = () => {
  function mapStyles (styles) {
    return {
      opacity: styles.opacity,
      position: styles.position
    }
  }
  // wrap the `spring` helper to use a bouncy config

  // child matches will...
  const bounceTransition = {
    atEnter: {
      opacity: 0
    },
    atLeave: {
      opacity: 0
    },
    atActive: {
      opacity: 1
    }
  }

  const { postList, newPost } = ROUTES
  return (
    <AnimatedSwitch
      atEnter={bounceTransition.atEnter}
      atLeave={bounceTransition.atLeave}
      atActive={bounceTransition.atActive}
      mapStyles={mapStyles}
      className="switch-wrapper"
    >
      <Route exact path={postList} component={PostList} />
      <Route exact path={newPost} component={CreatePost} />
    </AnimatedSwitch>
  )
}

export default Routes
