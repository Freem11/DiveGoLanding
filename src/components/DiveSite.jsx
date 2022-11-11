import React from 'react'
import "./divesite.css";
import DiveSitePlayer from "./DiveSitePlayer";
import DiveSiteVideo from "/videos/DiveSiteVideo.mp4";


function DiveSite() {
    return (
        <div className="wrapperdiv">
            <div className="leftside">
                <h4 className="headertext">Easily Add Your Dive Sites</h4>
                <p className="childtext">With the "I'm at the Dive Site" button you can get your dive site into the app while you are there</p>
            </div>

            <div className="rightside">
                    <DiveSitePlayer />
            </div>
            
        </div>
    )
}

export default DiveSite
