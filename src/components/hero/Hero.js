import React from "react";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            {" "}
            "Unlock Your Future: Study Abroad."
          </h1>
          <p className={styles.heroText}>
            Our team of experienced counselors is here to help you explore your
            potential and discover the endless opportunities that studying
            abroad can offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
