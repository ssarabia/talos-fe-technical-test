import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import MediaCard from 'components/MediaCard'
import { fetchPosts } from 'slices/post/post.slice'
import uniqueId from 'utils/uniqueId'

function PostList () {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const { posts } = useSelector(
    state => state.posts
  )

  return (
    <Container maxWidth="xl" >
      <Grid container spacing={5} alignItems="stretch">
        {posts.map(post => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={uniqueId('mediaCard')}>
            <MediaCard title={post.title} description={post.description} photoUrl={post.photoUrl} tags={post.tags} />
          </Grid>
        )
        )}
      </Grid>
    </Container>
  )
}

export default PostList
