import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";
import diveVideo from "/videos/DiveSiteVideo.mp4";

function DiveSitePlayer() {
  return (
    <div className="videoboxMini">
      <video
        src={diveVideo}
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
