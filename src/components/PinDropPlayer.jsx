import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";

function PinDropPlayer() {
  return (
    <div className="videoboxMini">
      <video
        src="/videos/PinDropVideo.mp4"
        // autoPlay
        // muted
        loop
        controls
        className="workahole"
      />
    </div>
  );
}

export default PinDropPlayer;
