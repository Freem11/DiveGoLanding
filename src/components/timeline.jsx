import React from 'react'
import TimelinePlayer from "./TimelinePlayer";
import "./photos.css";

function Timeline() {
    return (
        <div className="wrapperdivAlt">
            <div className="leftsideAlt">
            <TimelinePlayer />
            </div>

            <div className="rightsideAlt">
            <h4 className="headertextAlt">Right Animal, Right Time</h4>
                <p className="childtextAlt">Use the Slider to cruise the months of the year and see exactly when and where the animal you want to see can be found </p>

            </div>
            
        </div>
    )
}

export default Timeline
