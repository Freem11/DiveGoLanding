import React from "react";
import ReactPlayer from "react-player";
import "./videobox.css";
import tutVideo from "/videos/screenCaps.mp4";

function VideoPlayer() {
  return (
    <div className="videobox">
      {tutVideo &&
      <ReactPlayer
        url={tutVideo}
        width="auto"
        height="600px"
        controls
        playing={true}
        loop={true}
      />}
    </div>
  );
}

export default VideoPlayer;
