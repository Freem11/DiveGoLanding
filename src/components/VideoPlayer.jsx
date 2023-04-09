import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./videobox.css";
import phoneCase from "../images/pngwing.com2.png";

let screenInital = window.innerWidth;
let heroWidth
let heroHeigth
if (screenInital < 501) {
  heroHeigth = 270;
  heroWidth = 150;
}else {
  heroHeigth = 484;
  heroWidth = 276;
}

let Heighty
let Widthy

function VideoPlayer() {
  
  const [vidWidth, setVidWidth] = useState(heroWidth);
  const [vidHeigth, setVidHeigth] = useState(heroHeigth);

  window.addEventListener('resize', trackWidth);

  function trackWidth() {
    if (window.innerWidth < 501) {
      Heighty = 270;
      Widthy = 150;
    } else {
      Heighty = 484;
      Widthy = 276;
    }
    setVidHeigth(Heighty);
    setVidWidth(Widthy);
  }


  return (
    <div className="videobox">
      <img
        src={phoneCase}
        className="phoneskin"
      ></img>
           <ReactPlayer
            url="https://youtu.be/gjTZ6Jd9ReE"
            width={vidWidth}
            height={vidHeigth}
            controls={false}
            muted={true}
            playing={true}
            loop={true}
            playsinline={true}
            className="mainvideo"
          />
      <div className="blackout"></div>
    </div>
  );
}
export default VideoPlayer;
