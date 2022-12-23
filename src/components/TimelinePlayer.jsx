import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";
import timeVideo from "/videos/TimelineVideo.mp4";

function TimelinePlayer() {

  return (
    <div className="videoboxMini">
      <video
        src={timeVideo}
        autoPlay
        muted
        loop
        controls
        className="workahole"
      />
    </div>
  );
}

export default TimelinePlayer;
