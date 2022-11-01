import React from "react";
import "./calltoaction.css";
import Apple from "/images/app-store-png-logo-33116.png";
import Google from "/images/google-play-png-logo-3799.png";
import WebApp from "/images/WebApp2.png";

function CallToActions() {
  return (
    <div className="CTAbox">
      <a
        href="https://apps.apple.com/ca/app/divego/id6443680026"
        style={{ height: "70px", width: "180px"  }}
      >
        <img
          src={Apple}
          style={{ width: "265px", height: "103px", marginLeft: "-45px", marginTop: "-15px" }}
        />
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.DiveGo"
        style={{ height: "70px", width: "180px", marginLeft: "-10px" }}
      >
        <img
          src={Google}
          style={{ height: "153px", marginLeft: "15px", marginTop: "-40px" }}
        />
      </a>

      <a
        href="https://divego.netlify.app/"
        style={{ height: "70px", width: "180px" }}
      >
        <img
          src={WebApp}
          style={{
            width: "173px",
            height: "65px",
            marginTop: "4px", 
            marginLeft: "0px"
          }}
        />
      </a>
    </div>
  );
}

export default CallToActions;
