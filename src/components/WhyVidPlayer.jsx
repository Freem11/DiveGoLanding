import React from "react";
import ReactPlayer from "react-player/youtube";
import "./bigVids.css";

function WhyVidPlayer() {

  return (
    <div className="vidbox">
        <h3 className="bigvidlabels">About Us & DiveGo</h3>
      <ReactPlayer
      url = ""
      height= "400px"
      width= "85%"
       />
    </div>
  );
}

export default WhyVidPlayer;
