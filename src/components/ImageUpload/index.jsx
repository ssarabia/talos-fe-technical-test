import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import './ImageUpload.scss'

function ImageUpload ({ handleImageChange, image }) {
  return (
    <>
      <div id="image-upload-container">
        <Typography gutterBottom variant="h5" component="h5">
          Select Image:
        </Typography>
        <label htmlFor="raised-button-file">
          <Button variant="contained" component="span" >
          Upload
          </Button>
        </label>
        <img src={image || process.env.PUBLIC_URL + '/placeHolder.png'} alt="Uploaded"/>
        <input
          accept="image/*"
          style={{ display: 'none' }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleImageChange}
        />
      </div>
    </>
  )
}

ImageUpload.propTypes = {
  handleImageChange: PropTypes.func,
  image: PropTypes.any
}

export default ImageUpload
