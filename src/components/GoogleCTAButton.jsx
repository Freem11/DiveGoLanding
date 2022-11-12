import React from "react";
import "./button.css";
import googlelogo from "../images/googlelogo.png";

export default function GoogleCTAButton() {
  return (
    <a href='https://play.google.com/store/apps/details?id=com.DiveGo'>
    <button className="housing">
      <img src={googlelogo} className="googleimg"></img>
      <div className="texts">
        <div className="call" style={{fontFamily: "Hind"}}>GET IT ON</div>
        <div className="googlestore" style={{fontFamily: "Hind"}}>Google Play</div>
      </div>
    </button>
    </a>
  );
}

