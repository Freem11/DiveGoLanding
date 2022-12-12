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
import CallToActionsB from "./components/callToActionsB";
import PromoPlayer from "./components/PromoPlayer";
import WhyVidPlayer from "./components/WhyVidPlayer";
import heroVid from "/videos/heros.mp4";
import "./App.css";

//WHAT

let heroWidth = window.width
let heroHeigth = 800

console.log(heroWidth, heroHeigth)
function App() {
  return (
    <div className="wrapperdivMain">
    <div style={{ minHeight: "1000px", maxHeight: "auto" }}>
      <Logo />

  
      <div className="topsection" >

      <video 
      src={heroVid}
      autoPlay
      loop
      muted
      className="mainherovideo"
      />
      
        <div className="leftTop">
          <HeadLine />
          <SubTitle />
          <h2 className="joinusT" style={{fontFamily: "Caveat, cursive",}}>Start Making Your Dives Unforgettable!</h2>
          <CallToActions />
        </div>

        <div className="rightTop">
          <VideoPlayer />
        </div>

      </div>

      <div className="whyvideosection">
        <PromoPlayer />
        <WhyVidPlayer />
      </div>

      <div className="midsection">
        <DiveSite />
        <Photos />
        <NoGps />
        <Timeline />
      </div>

      <div className="bottomsection">
        <h2 className="joinus" style={{fontFamily: "Caveat, cursive",}}>Start Making Your Dives Unforgettable!</h2>
        <CallToActionsB />
      </div>
    </div>
    </div>
  );
}

export default App;
