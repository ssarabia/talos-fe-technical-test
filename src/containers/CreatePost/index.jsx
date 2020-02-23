import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Chip from '@material-ui/core/Chip'
import SaveIcon from '@material-ui/icons/Save'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import './CreatePost.scss'
import ImageUpload from 'components/ImageUpload'
import uniqueId from 'utils/uniqueId'
import { createPost, createPostFinish } from 'slices/post/post.slice'
import AlertDialog from 'components/AlertDialog'
import { ROUTES } from 'utils/constants'

function NewPost () {
  const dispatch = useDispatch()
  const history = useHistory()

  const [formValues, setFormValues] = useState({ title: '', description: '', tagField: '', tags: [], image: null })

  const { createSuccess } = useSelector(
    state => state.posts
  )

  const handleImageChange = event => {
    setFormValues({ ...formValues, image: event.target.files[0] })
  }

  const handleDeleteTag = position => {
    const tempTags = [...formValues.tags]
    tempTags.splice(position, 1)
    setFormValues({ ...formValues, tags: tempTags })
  }

  const handleAddTag = () => {
    const tempTags = [...formValues.tags]
    tempTags.push(formValues.tagField)
    setFormValues({ ...formValues, tagField: '', tags: tempTags })
  }

  const handleInputChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = () => {
    dispatch(createPost(formValues))
  }

  const finishSubmit = () => {
    history.push(ROUTES.postList)
    dispatch(createPostFinish())
  }

  return (
    <Container maxWidth="xl" id='new-post-container' >
      <AlertDialog open={createSuccess} onClose={finishSubmit} title={'Successfully Created'} body={'Your post has been created'}/>
      <Grid container spacing={5} alignItems="stretch">
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom variant="h4" component="h4">
            Create New Post
          </Typography>
          <form noValidate autoComplete="off">
            <TextField value={formValues.title} fullWidth label="Title" variant="outlined" name="title" onChange={handleInputChange} />
            <TextField
              value={formValues.description}
              fullWidth
              label="Description"
              multiline
              rows={3}
              variant="outlined"
              name="description"
              onChange={handleInputChange}
            />
            <TextField value={formValues.tagField} fullWidth label="Tags" variant="outlined" name="tagField" onChange={handleInputChange} />
            <Button onClick={handleAddTag} variant="contained" color="primary">
              Add Tag
            </Button>
          </form>
          {formValues.tags.map((tag, index) => (
            <Chip label={tag} onDelete={() => handleDeleteTag(index)} color="primary" variant="outlined" key={uniqueId('tagChip')} />
          ))}
        </Grid>
        <Grid item xs={12} sm={6}>
          <ImageUpload handleImageChange={handleImageChange} image={formValues.image ? URL.createObjectURL(formValues.image) : null} />
        </Grid>
      </Grid>
      <Button size="large" onClick={handleSubmit} variant="contained" color="primary" startIcon={<SaveIcon />}>
        Submit
      </Button>
    </Container >
  )
}

export default NewPost
