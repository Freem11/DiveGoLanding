import React from 'react'
import "./calltoaction.css";
import Apple from "/images/app-store-png-logo-33116.png"
import Google from "/images/google-play-png-logo-3799.png"
import WebApp from "/images/WebApp.png"

function CallToActions() {
    return (
        <div className="CTAbox">
            <a href="https://apps.apple.com/ca/app/divego/id6443680026">
            <img src={Apple}  style={{width: "265px", marginRight: "-30px", marginLeft: "-30PX"}}/>
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.DiveGo">
            <img src={Google}  style={{height: "153px", marginTop: "-25px"}}/>
            </a>

            <a href="https://divego.netlify.app/">
            <img src={WebApp}  style={{width: "180px", height: "65px", marginTop: "18px", marginLeft: "20px"}}/>
            </a>
        </div>
    )
}

export default CallToActions
