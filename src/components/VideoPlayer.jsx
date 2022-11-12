import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./videobox.css";
import tutVideo from "/videos/screencaps.mp4";
import phoneCase from "../images/pngwing.com2.png";
function VideoPlayer() {
  const [video, setVideo] = useState(tutVideo);

  return (
    <div className="videobox">
      <img
        src={phoneCase}
        className="phoneskin"
      ></img>
      <video 
      src="/videos/screencaps.mp4"
      autoPlay
      muted
      loop
      // controls
      className="mainvideo"
      />
    </div>
  );
}

export default VideoPlayer;
