import React from "react";
import "./button.css";
import applelogo from "../images/applelogo.png";

export default function AppleCTAButton() {
  return (
    <a href='https://apps.apple.com/ca/app/divego/id6443680026'>
    <button className="housing">
      <img src={applelogo} className="appleimg"></img>
      <div className="texts">
        <div className="call" style={{fontFamily: "Hind"}}>Download on the</div>
        <div className="applestore" style={{fontFamily: "Hind"}}>App Store</div>
      </div>
    </button>
    </a>
  );
}

