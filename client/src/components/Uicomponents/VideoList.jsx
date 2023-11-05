import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
const VideoList = ({videos}) => {
  const [checked, setChecked] = useState([0]);
  console.log(videos);
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper',paddingLeft:'10px' }}>
      {videos?.map((value) => {
        return (
          <ListItem
            key={value.etag}
            disablePadding
            sx={{ padding: '16px', borderRadius: '4px',boxShadow: '0 0 5px rgba(0, 0, 0, 0.25)',transition: 'all 0.2s ease-in-out' }}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
                onClick={handleToggle(value)}
              />
            </ListItemIcon>
           <Link to={`/player/${value.snippet.playlistId}?videoId=${value.snippet.resourceId.videoId}`}> <ListItemText id={value.etag} primary={value.snippet.title} /> </Link> 
            <hr></hr>
        </ListItem>
        );
      })}
    </List>
  )
}

export default VideoList