import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./miniplayer.css";

function PinDropPlayer() {
  return (
    <div className="videobox">
      <video
        src="/videos/PinDropVideo.mp4"
        // autoPlay
        // muted
        loop
        controls
        style={{ height: "400px", width: "250", borderRadius: "10px"  }}
      />
    </div>
  );
}

export default PinDropPlayer;
