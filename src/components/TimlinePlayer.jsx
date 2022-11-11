import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./miniPlayer.css";

function TimelinePlayer() {

  return (
    <div className="videoboxMini">
      <video
        src="/videos/TimelineVideo.mp4"
        // autoPlay
        // muted
        loop
        controls
        className="workahole"
      />
    </div>
  );
}

export default TimelinePlayer;
