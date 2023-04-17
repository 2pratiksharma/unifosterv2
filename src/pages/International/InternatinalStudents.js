import React, { useState, useEffect } from "react";
import styles from "./students.module.scss";
import ReactPlayer from "react-player";
import video from "./ahmed.mp4";

import tn from "./thumbnail.jpg";
import univ from "./univimg.jpg";
import img from "./618.jpg";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Nav/Nav";
import Logoanim from "../../components/Nav/Logoanim";
import VideoBG from "./VideoBG";
import StudentInfo from "./StudentInfo";

const InternationalStudents = () => {
  const [playing, setPlaying] = useState(false);

  const handleVideoClick = () => {
    setPlaying(!playing);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div>
        <NavBar />
        <Logoanim />
        <VideoBG />
      </div>
      <StudentInfo />
      <div className={styles.container}>
        <div className={styles.videoContainer} onClick={handleVideoClick}>
          <div className={styles.video}>
            <ReactPlayer
              light={<img src={tn} alt="Thumbnail" />}
              url={video}
              playing={playing}
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.textLine}>AHMED SEEMAB KHAN </div>
            <div className={styles.textLine2}>
              CURRENTLY PURSUING PRE MED IN USA
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.rightText}>
            Experience Shared By <br /> One Of Our Client
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InternationalStudents;
