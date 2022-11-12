import React from "react";
import "./button.css";
import applelogo from "../images/AppleCTA.png";

export default function AppleCTAButton() {
  return (
    <a href='https://apps.apple.com/ca/app/divego/id6443680026'>
    <button className="housing">
      <img src={applelogo} className="appleimg"></img>
    </button>
    </a>
  );
}

