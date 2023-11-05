import React from 'react'
import ReactPlayer from "react-player";
export const Player = ({videoId}) => {
    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
    console.log("===>",videoUrl);
    return (
    <ReactPlayer
    url={videoUrl}
    allowFullScreen
    controls={true}
    width="100%"
    height="100%"
  />
  )
}
