import React from "react";
import "./button.css";
import mantalogo from "../images/MantaCTA.png";

export default function MantaCTAButton() {
  return (
    <a href='https://divego.netlify.app'>
    <button className="housing">
      <img src={mantalogo} className="mantaimg"></img>
    </button>
    </a>
  );
}

