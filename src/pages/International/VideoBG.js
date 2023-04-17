import React from "react";
import vid from "../../assets/invid.mp4";
import "./bg.scss";
const VideoBG = () => {
  return (
    <div className="video-wrapper">
      <video src={vid} autoPlay muted loop />
      <div className="vid-text">
        <h1>We are your Study Abroad Co-Pilot!</h1>
      </div>
    </div>
  );
};

export default VideoBG;
