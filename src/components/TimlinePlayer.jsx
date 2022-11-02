import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";
import TimelineVideo from "/videos/TimelineVideo.mp4";

function TimelinePlayer() {

  const [video, setVideo] = useState(TimelineVideo);

  return (
    <div className="videobox">
      <ReactPlayer
        url={video}
        controls={true}
        playing={true}
        loop={true}
        onError={() => setVideo("/videos/Timelinevideo.mp4")}
        width="250px"
        height="400px"
      />
    </div>
  );
}

export default TimelinePlayer;
