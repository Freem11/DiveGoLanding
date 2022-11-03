import React from "react";
import "./calltoactionB.css";
import Apple from "/images/app-store-png-logo-33116.png";
import Google from "/images/googleplaystore.png";
import WebApp from "/images/WebApp2.png";

function CallToActionsB() {
  return (
    <div className="CTAboxB">
      <a
        href="https://apps.apple.com/ca/app/divego/id6443680026"
        style={{ height: "70px", width: "180px" }}
      >
        <img
          src={Apple}
          style={{
            width: "265px",
            height: "103px",
            marginLeft: "-45px",
            marginTop: "-14px",
          }}
        />
      </a>

      <a
        href="https://play.google.com/store/apps/details?id=com.DiveGo"
        style={{
          height: "70px",
          width: "180px",
          marginRight: "5px",
          paddingBottom: "-90px",
        }}
      >
        <img
          src={Google}
          style={{
            width: "175px",
            height: "65px",
            marginTop: "4.5px",
          }}
        />
      </a>

      <a
        href="https://divego.netlify.app/"
        style={{ height: "70px", width: "180px" }}
      >
        <img
          src={WebApp}
          style={{
            width: "175px",
            height: "65px",
            marginTop: "4px",
            marginLeft: "0px",
          }}
        />
      </a>
    </div>
  );
}

export default CallToActionsB;
