import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
const DashCard = ({result}) => {
  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary={result?.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {result?.channelTitle}
              </Typography>
              {result?.description}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" sx={{position:'relative',right:"10%",borderColor: '#333',}} />
    </List>
    </div>
  )
}

export default DashCard