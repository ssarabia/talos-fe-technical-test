import React, { useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import ArrowBack from '@material-ui/icons/ArrowBack'

import './PostDetails.scss'
import uniqueId from 'utils/uniqueId'
import { ROUTES, API_URL } from 'utils/constants'
import { fetchPostDetails } from 'slices/postDetails/postDetails.slice'

function NewPost () {
  const { id } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const { title, description, photoUrl, tags } = useSelector(
    state => state.postDetails
  )

  useEffect(() => {
    dispatch(fetchPostDetails(id))
  }, [dispatch, id])

  return (
    <Container maxWidth="xl" id='post-details-container' >
      <Grid container spacing={5} alignItems="stretch">
        <Grid item xs={12} className='center'>
          <Typography gutterBottom variant="h2" component="h2">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom variant="h4" component="p">
            Description:
          </Typography>
          <Typography gutterBottom variant="h5" component="p">
            {description}
          </Typography>
          <Typography gutterBottom variant="h4" component="p">
            Related Tags:
          </Typography>
          { tags.map(tag => (
            <Chip label={tag} color="primary" variant="outlined" key={uniqueId('tagChip')} />
          ))
          }
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src={photoUrl ? API_URL + photoUrl : process.env.PUBLIC_URL + '/placeHolder.png'} alt="Post"/>
        </Grid>
      </Grid>
      <Button size="large" onClick={() => { history.push(ROUTES.postList) }} variant="contained" color="primary" startIcon={<ArrowBack />}>
        Go back
      </Button>
    </Container >
  )
}

export default NewPost
