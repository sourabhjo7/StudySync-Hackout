import React, { useEffect, useState } from "react";
import "./Youtubeplayer.css";
import { Navbar } from "../Uicomponents/Navbar";
import ReactPlayer from "react-player";
import getVideos from "../../getvideobyplaylist";
import { useParams, useSearchParams } from "react-router-dom";
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
    // Update the query string
    setSearchParams({ videoId: videos[0].snippet.resourceId.videoId });
    setvideoId(videos[0].snippet.resourceId.videoId);
  };
  useEffect(() => {
    console.log("use effect");
    calldataApi();
  }, []);

  return (
    <>
      <Navbar />
      <div className="playerbox">
        <div className="left-box">
          <div className="top-left-box">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
          <div className="bottom-left-box">Bottom (40%)</div>
        </div>
        <div className="right-box">
          {videos?.map((video, index) => {
            <div key={index}>{video.snippet.resourceId.videoId}</div>;
          })}
        </div>
      </div>
    </>
  );
};

export default Youtubeplayer;
