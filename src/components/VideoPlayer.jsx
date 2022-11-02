import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./videobox.css";
import tutVideo from "/videos/screencaps.mp4";
import phoneCase from "/images/pngwing.com2.png";
function VideoPlayer() {
  const [video, setVideo] = useState(tutVideo);

  return (
    <div className="videobox">
      <img
        src={phoneCase}
        style={{
          height: "791px",
          width: "450px",
          position: "absolute",
          marginLeft: "-75px",
          marginTop: "-40px",
        }}
      ></img>
      <video 
      src="/videos/screencaps.mp4"
      autoPlay
      muted
      loop
      controls
      style={{height: "700px", width: "300px"}}
      />
    </div>
  );
}

export default VideoPlayer;
