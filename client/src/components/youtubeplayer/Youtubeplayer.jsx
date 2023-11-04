import React from "react";
import "./Youtubeplayer.css";
import { Navbar } from "../Uicomponents/Navbar";
import ReactPlayer from "react-player";
const Youtubeplayer = () => {
  return (
    <>
      <Navbar />
      <div className="playerbox">
        <div className="left-box">
          <div className="top-left-box">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=tCvSDnRsGnw"
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
          <div className="bottom-left-box">Bottom (40%)</div>
        </div>
        <div className="right-box">Right Box (30%)</div>
      </div>
    </>
  );
};

export default Youtubeplayer;
