import React from "react";
import "./button.css";
import mantalogo from "../images/Matt_Manta_White.png";

export default function MantaCTAButton() {
  return (
    <a href='https://divego.netlify.app'>
    <button className="housing">
      <img src={mantalogo} className="mantaimg"></img>
      <div className="texts">
        <div className="call">Available</div>
        <div className="mantastore">On The Web</div>
      </div>
    </button>
    </a>
  );
}

