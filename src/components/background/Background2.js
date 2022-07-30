import React from "react";
import "./Background.css";
import coverVideo from "../../media/mp42.mp4";

const Background2 = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />

        </div>
    );
};

export default Background2;
