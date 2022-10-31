import React from "react";
import ReactPlayer from "react-player";
import "./videobox.css";
import tutVideo from "/videos/screencaps.mp4";

function VideoPlayer() {
  return (
    <div>
      {tutVideo &&
      <ReactPlayer
        url={tutVideo}
        width="350px"
        height="auto"
        controls
        playing={true}
        loop={true}
      />}
    </div>
  );
}

export default VideoPlayer;
