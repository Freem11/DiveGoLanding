import React from "react";
import Manta from "../images/Matt_Manta_White.png";
import "./logo.css";

function Logo() {
  return (
    <div className="logocontainer">
      <img src={Manta} className="mantalogo"></img>
      <h2 className="logoname">
        DiveGo
      </h2>
    </div>
  );
}

export default Logo;
