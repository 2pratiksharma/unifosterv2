import React, { useEffect } from "react";
import css from "./services.module.scss";
import { ourServicesInfo } from "../../assets/data";
import free from "./../../assets/free.png";
import admission from "./../../assets/admisson.png";
import visa from "./../../assets/visaic.png";
import meeting from "./../../assets/meeting.png";
import info from "./../../assets/info.png";
import hostel from "./../../assets/hostel.png";
import insurance from "./../../assets/insurance.png";
import travel from "./../../assets/travel.png";
import infoimg2 from "../.././assets/infoservbg.jpg";

import infoimg from "../../assets/moreinfo.jpg";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Nav/Nav";

import ScrollBtn from "../../components/button/ScrollBtn";

const StudentServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <NavBar />
      <ScrollBtn />

      <div className={css.titleImgContainer}>
        <img src={infoimg2} />
      </div>

      <div className={css.wrapper}>
        <div className={css.infotitle}>
          <h1>
            What <i> We Do </i> For You!
          </h1>
        </div>
        <div className={css.container}>
          {/* box 1 start */}
          <div className={css.box1}>
            <div className={css.containerBox}>
              <img src={free} alt="free" />
              <h4 style={{ textDecoration: "underline" }}>
                {ourServicesInfo[0].service}
              </h4>
              <p>{ourServicesInfo[0].text}</p>
            </div>

            <div className={css.containerBox}>
              {" "}
              <img src={admission} alt="admission" />
              <h4 style={{ textDecoration: "underline" }}>
                {ourServicesInfo[1].service}
              </h4>
              <p>{ourServicesInfo[1].text}</p>
            </div>
            <div className={css.containerBox}>
              <img src={insurance} alt="free" />
              <h4 style={{ textDecoration: "underline" }}>
                {ourServicesInfo[6].service}
              </h4>
              <p>{ourServicesInfo[6].text}</p>
            </div>
          </div>{" "}
          {/* box 1 end */}
          {/* box 2 start */}
          <div className={css.box2}>
            <div className={css.containerBox}>
              <img src={visa} alt="free" />
              <h4 style={{ textDecoration: "underline" }}>
                {ourServicesInfo[2].service}
              </h4>
              <p>{ourServicesInfo[2].text}</p>
            </div>

            <div className={css.containerBox}>
              {" "}
              <img src={meeting} alt="admission" />
              <h4 style={{ textDecoration: "underline" }}>
                {ourServicesInfo[3].service}
              </h4>
              <p>{ourServicesInfo[3].text}</p>
            </div>
          </div>
          {/* box 2 end */}
          {/* box 3 start */}
          <div className={css.box3}>
            <div className={css.containerBox}>
              <img src={info} alt="free" />
              <h4 style={{ textDecoration: "underline" }}>
                {ourServicesInfo[4].service}
              </h4>
              <p>{ourServicesInfo[4].text}</p>
            </div>

            <div className={css.containerBox}>
              {" "}
              <img src={hostel} alt="admission" />
              <h4 style={{ textDecoration: "underline" }}>
                {ourServicesInfo[5].service}
              </h4>
              <p>{ourServicesInfo[5].text}</p>
            </div>
            <div className={css.containerBox}>
              {" "}
              <img src={travel} alt="admission" />
              <h4 style={{ textDecoration: "underline" }}>
                {ourServicesInfo[7].service}
              </h4>
              <p>{ourServicesInfo[7].text}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={css.moreinfoContainer}>
        <div className={css.moreinfoTextContainer}>
          <h1>
            Achieve Your Study Abroad Goals with <b> ZERO </b> Stress
          </h1>
          <p>
            At Unifoster, we understand that studying abroad can be a stressful
            and overwhelming process. That's why we offer comprehensive
            counseling services to help you achieve your study abroad goals
            without lifting a finger. Our team of experienced counselors will
            invest time to understand your needs and identify the best study
            abroad options for you. From navigating complex application
            processes to securing financial aid, we'll take care of everything
            so you can focus on what matters most - your education and
            experience abroad.
          </p>
        </div>
        <div className={css.moreinfoImageContainer}>
          <img src={infoimg} />
        </div>
      </div>

      <div className={css.quoteContainer}>
        <h4>
          "Success is not final, failure is not fatal: It is the courage to
          continue that counts." <br />
          <p className={css.auth}>- Winston Churchill</p>
        </h4>
        <p>
          Studying abroad can be a challenging experience, but perseverance is
          key. <br /> Whether you face language barriers, homesickness, or
          academic difficulties,
          <br /> it's important to keep pushing forward.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default StudentServices;
