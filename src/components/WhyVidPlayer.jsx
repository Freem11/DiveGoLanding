import React from "react";
import ReactPlayer from "react-player/youtube";
import "./bigVids.css";

function WhyVidPlayer() {

  return (
    <div className="vidbox">
        <h3 className="bigvidlabels">About Us & DiveGo</h3>
      <ReactPlayer
      url = "https://youtu.be/dg-nvVdQR6g"
      width= "70%"
      controls="true"
       />
    </div>
  );
}

export default WhyVidPlayer;
