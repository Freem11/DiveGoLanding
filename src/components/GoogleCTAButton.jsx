import React from "react";
import "./button.css";
import googlelogo from "../images/GoogleCTA.png";

export default function GoogleCTAButton() {
  return (
    <a href='https://play.google.com/store/apps/details?id=com.DiveGo'>
    <button className="housing">
      <img src={googlelogo} className="googleimg"></img>
    </button>
    </a>
  );
}

