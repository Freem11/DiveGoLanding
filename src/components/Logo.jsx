import React from "react";
import Manta from "../../public/images/Matt_Manta_White.png";
import "./logo.css";

function Logo() {
  return (
    <div className="logocontainer">
      <img src={Manta} className="mantalogo"></img>
      <h2
        style={{
          fontFamily: "Caveat, cursive",
          height: "50px",
          textAlign: "center",
          marginTop: "10px",
          marginLeft: "5px"
        }}
      >
        DiveGo
      </h2>
    </div>
  );
}

export default Logo;
