import React, { useEffect, useState } from "react";
import "./Youtubeplayer.css";
import { Navbar } from "../Uicomponents/Navbar";

import getVideos from "../../getvideobyplaylist";
import { useParams, useSearchParams } from "react-router-dom";
import VideoList from "../Uicomponents/VideoList";
import AskAi from "../../AskAi/AskAi";
import { Player } from "./Player";
const Youtubeplayer = () => {
  const [videos, setvideos] = useState([]);
  const { playlistId } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const [videoId, setvideoId] = useState("");

  const calldataApi = async () => {
    const videos = await getVideos(playlistId);
    console.log("----videos--->", videos);
    setvideos(videos);
    let vid= searchParams.get('videoId');
    console.log(vid);
    // Update the query string
   if(!vid){
    setSearchParams({ videoId: videos[0].snippet.resourceId.videoId });
    setvideoId(videos[0].snippet.resourceId.videoId);
   }
   else{
    setvideoId(vid);
   }
    
  };
  useEffect(() => {
    console.log("use effect");
    calldataApi();
  }, [searchParams]);

  return (
    <>
      <Navbar />
      <div className="playerbox">
        <div className="left-box">
          <div className="top-left-box">
            <Player videoId={videoId} />
          </div>
          <div className="bottom-left-box"><AskAi/></div>
        </div>
        <div className="right-box">
          <VideoList videos={videos} />
        </div>
      </div>
    </>
  );
};

export default Youtubeplayer;
