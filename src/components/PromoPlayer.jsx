import React from "react";
import ReactPlayer from "react-player/youtube";
import "./bigVids.css";

function PromoPlayer() {

  return (
    <div className="vidbox">
      <h3 className="bigvidlabels">What is DiveGo for?</h3>
      <ReactPlayer
      url = ""
      height= "400px"
      width= "85%"
       />
    </div>
  );
}

export default PromoPlayer;
