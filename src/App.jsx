import { useState } from "react";
import HeadLine from "./components/HeadLine";
import SubTitle from "./components/SubTitle";
import VideoPlayer from "./components/VideoPlayer";
import CallToActions from "./components/callToActions";
import Logo from "./components/Logo";
import DiveSite from "./components/DiveSite";
import Photos from "./components/Photos";
import NoGps from "./components/NoGps";
import Timeline from "./components/timeline";
import "./App.css";

function App() {
  return (
    <div style={{ minHeight: "1000px", maxHeight: "auto" }}>
      <Logo />

      <div className="topsection">
        <div className="leftTop">
          <HeadLine />
          <SubTitle />
          <CallToActions />
        </div>

        <div className="rightTop">
          <VideoPlayer />
        </div>
      </div>

      <div className="midsection">
        <DiveSite />
        <Photos />
        <NoGps />
        <Timeline />
      </div>
    </div>
  );
}

export default App;
