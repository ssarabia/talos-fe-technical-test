import React from 'react'
import { Route } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import { ROUTES } from 'utils/constants'
import PostList from 'containers/PostList'
import CreatePost from 'containers/CreatePost'
import PostDetails from 'containers/PostDetails'
import './routes.scss'

const Routes = () => {
  const mapStyles = (styles) => ({
    transform: `translateX(${styles.offset}%)`,
    opacity: styles.opacity
  })

  const transition = {
    atEnter: {
      offset: 100,
      opacity: 0
    },
    atLeave: {
      offset: 0,
      opacity: 1
    },
    atActive: {
      offset: 0,
      opacity: 1
    }
  }

  const { postList, newPost, postDetails } = ROUTES
  return (
    <AnimatedSwitch
      atEnter={transition.atEnter}
      atLeave={transition.atLeave}
      atActive={transition.atActive}
      mapStyles={mapStyles}
      className="switch-wrapper"
    >
      <Route exact path={postList} component={PostList} />
      <Route exact path={newPost} component={CreatePost} />
      <Route exact path={postDetails()} component={PostDetails} />
    </AnimatedSwitch>
  )
}

export default Routes
