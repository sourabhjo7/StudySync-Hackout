import React, { useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const CardComponent = ({result}) => {
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="{result?.snippet?.thumbnails?.high?.height}"
          width="{result?.snippet?.thumbnails?.high?.width}"
          image={result?.snippet?.thumbnails?.high?.url}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {result?.snippet?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {result?.snippet?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CardComponent