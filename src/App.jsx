import { useState } from "react";
import HeadLine from "./components/HeadLine";
import SubTitle from "./components/SubTitle";
import VideoPlayer from "./components/VideoPlayer";
import CallToActions from "./components/callToActions";
import "./App.css";


function App() {
  return (
    <div className="mainDiv">
      <div className="leftTop">
        <HeadLine />
        <SubTitle />
        <CallToActions/>
      </div>
      <div className="rightTop">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default App;
