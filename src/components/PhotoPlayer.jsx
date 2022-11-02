import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";

function PhotoPlayer() {
  return (
    <div className="videobox">
      <video
        src="/videos/PhotoVideo.mp4"
        // autoPlay
        // muted
        loop
        controls
        style={{ height: "400px", width: "250", borderRadius: "10px"  }}
      />
    </div>
  );
}

export default PhotoPlayer;
