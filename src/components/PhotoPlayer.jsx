import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";
import PhotoVideo from "/videos/PhotoVideo.mp4";

function PhotoPlayer() {

  const [video, setVideo] = useState(PhotoVideo);

  return (
    <div className="videobox">
      <ReactPlayer
        url={video}
        controls={true}
        playing={true}
        loop={true}
        onError={() => setVideo("/videos/Photovideo.mp4")}
        width="250px"
        height="400px"
      />
    </div>
  );
}

export default PhotoPlayer;
