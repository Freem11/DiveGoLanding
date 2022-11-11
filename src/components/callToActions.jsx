import React from "react";
import "./calltoaction.css";
import Apple from "../images/app-store-png-logo-33116.png";
import Google from "../images/google-play-png-logo-3799.png";
import WebApp from "../images/WebApp2.png";

import AppleCTAButton from "./AppleCTAButton";
import GoogleCTAButton from "./GoogleCTAButton";
import MantaCTAButton from './MantaCTAButton';

function CallToActions() {
  return (
    <div className="CTAbox">
      <AppleCTAButton />
      <GoogleCTAButton />
      <MantaCTAButton />
    </div>
  );
}

export default CallToActions;
