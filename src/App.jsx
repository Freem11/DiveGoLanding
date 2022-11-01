import { useState } from "react";
import HeadLine from "./components/HeadLine";
import SubTitle from "./components/SubTitle";
import VideoPlayer from "./components/VideoPlayer";
import CallToActions from "./components/callToActions";
import Logo from "./components/Logo";
import "./App.css";


function App() {
  return (
    <div className="mainDiv">
      <Logo />
      <div className="topsection">
      <div className="leftTop">
        <div className="blankbox"></div>
        <HeadLine />
        <SubTitle />
        <CallToActions/>
      </div>
      <div className="rightTop">
      <div className="blankbox2"></div>
        <VideoPlayer />
      </div>
      </div>
    </div>
  );
}

export default App;
