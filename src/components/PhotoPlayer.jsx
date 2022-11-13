import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";

function PhotoPlayer() {
  return (
    <div className="videoboxMini">
      <video
        src="/videos/PhotoVideo.mp4"
        autoPlay
        muted
        loop
        controls
        className="workahole"
      />
    </div>
  );
}

export default PhotoPlayer;
