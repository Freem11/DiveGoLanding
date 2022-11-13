import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";

function DiveSitePlayer() {
  return (
    <div className="videoboxMini">
      <video
        src="/videos/DiveSiteVideo.mp4"
        autoPlay
        muted
        loop
        controls
        className="workahole"
      />
    </div>
  );
}

export default DiveSitePlayer;
