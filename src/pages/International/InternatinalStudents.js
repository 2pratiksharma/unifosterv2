import React, { useState, useEffect } from "react";
import styles from "./students.module.scss";
import ReactPlayer from "react-player";
import video from "./ahmed.mp4";

import tn from "./thumbnail.jpg";

import Footer from "../../components/Footer/Footer";

import VideoBG from "./VideoBG";
import StudentInfo from "./StudentInfo";
import NavBar from "../../components/Nav/Nav";
import ScrollBtn from "../../components/button/ScrollBtn";

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
        <ScrollBtn />
        <VideoBG />
      </div>
      <StudentInfo />
      <div className={styles.man}>
        <div className={styles.manInfo}>
          <div className={styles.manInfoDetails}>
            <h1>
              Find Your <b>Perfect</b> Program
            </h1>
            <p>
              With so many study abroad programs to choose from, it can be
              overwhelming to know where to start. Our counselors can help you
              find the program that matches your interests and goals, whether
              you want to study a specific subject, learn a new language, or
              explore a new culture. Fill out the form below to get started
            </p>
            <button className={styles.manbtn}>Apply Now</button>
          </div>
        </div>

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
      </div>

      <Footer />
    </div>
  );
};

export default InternationalStudents;
