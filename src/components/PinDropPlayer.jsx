import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";
import pinVideo from "/videos/PinDropVideo.mp4";

function PinDropPlayer() {
  return (
    <div className="videoboxMini">
      <video
        src={pinVideo}
        autoPlay
        muted
        loop
        controls
        className="workahole"
      />
    </div>
  );
}

export default PinDropPlayer;
