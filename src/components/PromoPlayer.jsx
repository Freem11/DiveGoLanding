import React from "react";
import ReactPlayer from "react-player/youtube";
import "./bigVids.css";

function PromoPlayer() {

  return (
    <div className="vidbox">
      <h3 className="bigvidlabels">What is DiveGo for?</h3>
      <ReactPlayer
      url = "https://youtu.be/xwr6t4mmncc"
      height= "350px"
      width= "70%"
      controls="true"
       />
    </div>
  );
}

export default PromoPlayer;
