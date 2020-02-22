import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

import './MediaCard.scss'
import { API_URL } from 'utils/constants'

const MediaCard = ({ title, description, photoUrl, tags }) => {
  return (
    <Card className='card-container'>
      <CardActionArea>
        <CardMedia
          className='card-image'
          image={API_URL + photoUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-bottom">
        <Typography variant="body1" color="initial" component="p">
          {tags.join(', ')}
        </Typography>
        <Button size="small" color="primary">
          View
        </Button>
      </CardActions>
    </Card>
  )
}

MediaCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photoUrl: PropTypes.string,
  tags: PropTypes.array
}

export default MediaCard
