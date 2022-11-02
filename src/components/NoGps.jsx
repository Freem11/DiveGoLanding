import React from 'react'
import PinDropPlayer from "./PinDropPlayer";
import "./divesite.css";

function NoGps() {
    return (
        <div className="wrapperdiv">
            <div className="leftside">
                <h4>No GPS, No Problem!</h4>
                <p className="childtext">No GPS on your photo? Place the manta ray pin anywhere on the map to get the GPS coordinates </p>
            </div>

            <div className="rightside">
                    <PinDropPlayer />
            </div>
            
        </div>
    )
}

export default NoGps
