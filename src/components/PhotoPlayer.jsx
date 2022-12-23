import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";
import photoVideo from "/videos/PhotoVideo.mp4";

function PhotoPlayer() {
  return (
    <div className="videoboxMini">
      <video
        src={photoVideo}
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
