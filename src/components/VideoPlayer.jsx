import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./videobox.css";
import tutVideo from "/videos/screencaps.mp4";
import phoneCase from "/images/pngwing.com2.png";
function VideoPlayer() {
  const [video, setVideo] = useState(tutVideo);

  //async await?

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
      <ReactPlayer
        url={video}
        controls={true}
        playing={true}
        loop={true}
        onError={() => setVideo("/videos/screenCaps.mp4")}
        width="300px"
        height="700px"
      />
    </div>
  );
}

export default VideoPlayer;
