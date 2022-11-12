import React from "react";
import "./button.css";
import mantalogo from "../images/Matt_Manta_White.png";

export default function MantaCTAButton() {
  return (
    <a href='https://divego.netlify.app'>
    <button className="housing">
      <img src={mantalogo} className="mantaimg"></img>
      <div className="texts">
        <div className="call" style={{fontFamily: "Hind"}}>Available</div>
        <div className="mantastore" style={{fontFamily: "Hind"}}>On The Web</div>
      </div>
    </button>
    </a>
  );
}

