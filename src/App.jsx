import { useState } from "react";
import HeadLine from "./components/HeadLine";
import SubTitle from "./components/SubTitle";
import VideoPlayer from "./components/VideoPlayer";
import CallToActions from "./components/callToActions";
import Logo from "./components/Logo";
import "./App.css";

function App() {
  return (
    <div style={{minHeight: "1000px", maxHeight: "auto"}}>
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
      
    </div>
  );
}

export default App;
