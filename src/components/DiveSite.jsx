import React from 'react'
import "./divesite.css";
import MiniPlayer from "./MiniPlayer";
import DiveSiteVideo from "/videos/DiveSiteVideo.mp4";


function DiveSite() {
    return (
        <div className="wrapperdiv">
            <div className="leftside">
                <h4>Easily Add Your Dive Sites</h4>
                <p className="childtext">With the "I'm at the Dive Site" button you can get your dive site into the app while you are there</p>
            </div>

            <div className="rightside">
                    <MiniPlayer />
            </div>
            
        </div>
    )
}

export default DiveSite
