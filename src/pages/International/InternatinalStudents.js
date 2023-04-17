import React, { useState, useEffect } from "react";
import styles from "./students.module.scss";
import ReactPlayer from "react-player";
import video from "./ahmed.mp4";

import tn from "./thumbnail.jpg";
import univ from "./univimg.jpg";
import img from "./618.jpg";
import Footer from "../../components/Footer/Footer";

const Article = () => {
  return (
    <article className={styles.article}>
      <div className={styles.imageWrapper}>
        <div className={styles.imageText}>
          <p className={styles.imageTextContent}>
            Studying abroad can be one of the most beneficial and impactful
            experiences of a lifetime. Nothing builds confidence like studying
            abroad in. By learning a new language, immersing in a different
            culture, and traveling in a new country, students gain adaptability
            and problem-solving skills for college and beyond. It gives you the
            opportunity to explore life away from home and the challenges that
            it brings. You’ll be more likely to take on new challenges and see
            them through as the capable world traveler that you are, overseas
            education is often provided to the international students for free
            or partly sponsored both by the home and host countries, which make
            it affordable, even for youngsters from an unprivileged segment of
            society.
          </p>
        </div>
        <img src={univ} alt="Studying abroad" className={styles.image} />
      </div>
      <div className={styles.textWrapper}>
        <p className={styles.textContent}>
          Foreign universities offer new and useful subjects with the
          opportunity to obtain up-to-date knowledge and skills. Moreover, young
          individuals who study abroad have a chance to meet with people who
          belong to different cultural and religious affiliations which help
          them develop their people skills and teach them how to work in a
          multinational, multicultural environment It also removes tensions
          between people who belong to the different cultures.
        </p>
      </div>

      <div className={styles.textWrapper2}>
        <img src={img} alt="Abroad education" className={styles.image2} />
        <ul className={styles.list}>
          <p
            style={{
              textDecoration: "underline",
              textDecorationColor: "#7800ff",
              marginBottom: "15px",
              fontWeight: "bold",
            }}
            className={styles.textContent2}
          >
            Why going abroad is comparatively better than going to India for
            higher education.
          </p>
          <li className={styles.listItem}>
            India has fierce competition (academics)
          </li>
          <li className={styles.listItem}>
            International Degree has more value
          </li>
          <li className={styles.listItem}>Development as an individual</li>
          <li className={styles.listItem}>Employment Prospects</li>
          <li className={styles.listItem}>Easy Accessibility to Admission</li>
          <li className={styles.listItem}>
            Exceptional Prospects for Research
          </li>
          <li className={styles.listItem}>
            Multiple Options than Traditional Courses
          </li>
          <li className={styles.listItem}>
            Quality Education &amp; Transversal Skills
          </li>
        </ul>
      </div>
    </article>
  );
};

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
        <Article />
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

      <Footer />
    </div>
  );
};

export default InternationalStudents;
