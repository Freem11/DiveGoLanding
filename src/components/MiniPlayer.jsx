import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";
import DiveSiteVideo from "/videos/DiveSiteVideo.mp4";

function MiniPlayer() {

  const [video, setVideo] = useState(DiveSiteVideo);

  return (
    <div className="videobox">
      <ReactPlayer
        url={video}
        controls={true}
        playing={true}
        loop={true}
        onError={() => setVideo("/videos/DiveSitevideo.mp4")}
        width="250px"
        height="400px"
      />
    </div>
  );
}

export default MiniPlayer;
