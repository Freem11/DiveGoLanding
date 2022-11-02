import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";
import PinDropVideo from "/videos/PinDropVideo.mp4";

function PinDropPlayer() {

  const [video, setVideo] = useState(PinDropVideo);

  return (
    <div className="videobox">
      <ReactPlayer
        url={video}
        controls={true}
        playing={true}
        loop={true}
        onError={() => setVideo("/videos/PinDropvideo.mp4")}
        width="250px"
        height="400px"
      />
    </div>
  );
}

export default PinDropPlayer;
