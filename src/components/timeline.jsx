import React from 'react'
import TimelinePlayer from "./TimlinePlayer";
import "./photos.css";

function Timeline() {
    return (
        <div className="wrapperdiv">
            <div className="leftsideAlt">
            <TimelinePlayer />
            </div>

            <div className="rightsideAlt">
            <h4>Right Animal, Right Time</h4>
                <p className="childtext">Use the Slider to cruise the months of the year and see exactly when and where the animal you want to see can be found </p>

            </div>
            
        </div>
    )
}

export default Timeline
