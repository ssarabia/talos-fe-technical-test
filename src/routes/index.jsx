import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { ROUTES } from 'utils/constants'
import PostList from 'containers/PostList'

const renderer = Component => Component || <div />

const Routes = () => {
  const { postList } = ROUTES
  return (
    <Switch>
      <Route exact path={postList} component={renderer(PostList)} />
    </Switch>
  )
}

export default Routes
