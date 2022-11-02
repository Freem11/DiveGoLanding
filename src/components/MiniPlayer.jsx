import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";

function MiniPlayer() {
  return (
    <div className="videobox">
      <video
        src="/videos/DiveSiteVideo.mp4"
        // autoPlay
        // muted
        loop
        controls
        style={{ height: "400px", width: "250", borderRadius: "10px" }}
      />
    </div>
  );
}

export default MiniPlayer;
