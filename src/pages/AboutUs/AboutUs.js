import React from "react";
import AboutBG from "./AboutBG";
import "./about.scss";
import NavBar from "../../components/Nav/Nav";
import Logoanim from "../../components/Nav/Logoanim";
import Footer from "../../components/Footer/Footer";

import misson from "../../assets/misson.png";
import value from "../../assets/value.png";
import vision from "../../assets/target.png";
import { motion } from "framer-motion";

const BannerItem = [
  {
    img: misson,
    heading: "Mission",
    text: "To help every customer and strengthen their future with us",
  },
  {
    img: vision,
    heading: "Vision",
    text: "Your growth motivates us, community defines us.",
  },
  {
    img: value,
    heading: "Values",
    text: "Dedicated to provide high quality consultancy. We are dedicated to open, honest and trustworthy communication.",
  },
];

const ComponentInfo = () => {
  return (
    <div className="Aboutbanner">
      {BannerItem.map((point, i) => (
        <div key={i} className="Aboutpoint">
          <div className="Abouticon">
            <img src={point.img} alt="Point icon" />
          </div>
          <div className="Aboutheading">{point.heading}</div>
          <div className="Abouttext">{point.text}</div>
        </div>
      ))}
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <Logoanim />
      <AboutBG />

      {/** Hero for About */}
      <div className="who-container">
        <div className="who-title">
          {" "}
          <h1>
            Who<b> We </b> Are
          </h1>
          <p>
            Unifoster consulting focus on our clients most critical issues and
            oppurtunities, we take the time to develop close relationship and
            understand each applicant’s different educational goals and commit
            to provide the highest level of service & best possible outcomes for
            students. We support and accompany you on your path to fulfill your
            dreams. We assist with all types of questions of yours through the
            necessary applications and steps. We prive ourselves on prompt,
            clear & efficient communication and deliver creative, practical
            solutions to the applicants.
          </p>
          <ComponentInfo />
          <div className="founder-msg-container">
            <div className="founder-title">
              <h2>
                Our Founder's <b>Vision </b>for You
              </h2>
            </div>
            <div className="founder-message">
              <div className="message">
                As the founder and CEO of Unifoster, I would like to say that we
                are here to help you achieve your dream of studying abroad. Our
                team of experienced counselors will guide you through the entire
                process, from selecting the right course and university to
                securing your admission and visa. With our global network of
                partner universities, we offer a wide range of courses and
                programs to suit your interests and career goals. Let's make
                your dreams a reality! <br />
                <b>-Faatin Syed Ravoof Hussain</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** founder message */}

      <Footer />
    </>
  );
};

export default AboutUs;
