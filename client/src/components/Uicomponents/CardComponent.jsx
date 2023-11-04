import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const CardComponent = ({result}) => {
  
  return (
    <Card sx={{ maxWidth: 500 }} style={{ marginBottom: '20px' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="{result?.snippet?.thumbnails?.high?.height}"
          width="{result?.snippet?.thumbnails?.high?.width}"
          image={result?.snippet?.thumbnails?.high?.url}
        />
        <CardContent sx={{ backgroundColor: 'rgb(162, 219, 250)' }}>
          <Typography gutterBottom variant="h5" component="div">
          {result?.snippet?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {result?.snippet?.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ backgroundColor: 'rgb(162, 219, 250)', display:'flex', justifyContent:'space-between' }}>
          <Button size="small" sx={{ backgroundColor: '#FFFFFF', color: 'black' }}>Add to courses </Button>
          <Typography variant="h6" color="text.secondary">
            {result?.snippet?.channelTitle}
          </Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}

export default CardComponent