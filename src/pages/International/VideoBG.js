import React from "react";
import vid from "../../assets/invid.mp4";
import ReactPlayer from "react-player";
import "./bg.scss";
const VideoBG = () => {
  return (
    <div className="video-wrapper">
      <ReactPlayer
        url={vid}
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
      />
      <div className="vid-text">
        <h1>We are your Study Abroad Co-Pilot!</h1>
      </div>
    </div>
  );
};

export default VideoBG;
