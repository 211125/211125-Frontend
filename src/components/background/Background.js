import React from "react";
import "./Background.css";
import coverVideo from "../../media/mp42.mp4";

const Background = () => {
    return (
        <div className="cover-container">
            <video className="video" src={coverVideo} autoPlay loop muted />
            <h1>UP store</h1>
            <p>Start selling in the UP store, why not?</p>
        </div>
    );
};

export default Background;
