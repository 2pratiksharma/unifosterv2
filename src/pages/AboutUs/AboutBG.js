import React from "react";
import vid from "../../assets/earthvid.mp4";
import "./aboutbg.scss";
import ReactPlayer from "react-player";

const AboutBG = () => {
  return (
    <div>
      <div className="video-wrapper-about">
        <ReactPlayer
          url={vid}
          playing={true}
          loop={true}
          muted={true}
          controls={false}
          width="100%"
          height="100%"
        />
        <div className="vid-text-about">
          <h1>
            Explore the world and broaden your horizons with our,
            <br /> student counseling services for studying abroad.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AboutBG;
