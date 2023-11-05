import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProfileCard = ({user}) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345,height: 300,display:'flex',flexDirection: 'column',justifyContent:'space-around',position:'relative',left:"15px", }}>
        <CardMedia
          component="img"
          height="150"
          width="100"
          image={user?.profilePicture}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{position:'relative',right:"21%"}}>
            Name: {user?.firstName} {user?.lastName}
          </Typography>
          <Typography variant="h6"  >
            Email:{user.email}
          </Typography>
        </CardContent>
    </Card>
    </div>
  )
}

export default ProfileCard