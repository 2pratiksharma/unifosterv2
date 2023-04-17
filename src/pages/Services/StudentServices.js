import React from "react";
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

import Extra from "./Extra";
import Footer from "../.././components/Footer/Footer";
import NavBar from "../../components/Nav/Nav";
import Logoanim from "../../components/Nav/Logoanim";

const StudentServices = () => {
  return (
    <>
      <NavBar />
      <Logoanim />
      <div className={css.wrapper}>
        <div className={css.title}>
          <h1 className={css.titletext}>Student Services</h1>
        </div>

        <div className={css.container}>
          {/* box 1 start */}
          <div className={css.box1}>
            <div className={css.container1Box1}>
              <img src={free} alt="free" style={{ marginLeft: "250px" }} />
              <h4 style={{ textDecoration: "underline", marginBottom: "7px" }}>
                {ourServicesInfo[0].service}
              </h4>
              <p style={{ marginBottom: "54px" }}>{ourServicesInfo[0].text}</p>
            </div>

            <div className={css.container2Box1}>
              {" "}
              <img
                src={admission}
                style={{ marginLeft: "250px" }}
                alt="admission"
              />
              <h4 style={{ textDecoration: "underline" }}>
                {ourServicesInfo[1].service}
              </h4>
              <p>{ourServicesInfo[1].text}</p>
            </div>
          </div>{" "}
          {/* box 1 end */}
          {/* box 2 start */}
          <div className={css.box2}>
            <div className={css.container1Box1}>
              <img src={visa} alt="free" style={{ marginLeft: "250px" }} />
              <h4 style={{ textDecoration: "underline", marginBottom: "7px" }}>
                {ourServicesInfo[2].service}
              </h4>
              <p style={{ marginBottom: "50px" }}>{ourServicesInfo[2].text}</p>
            </div>

            <div className={css.container3Box1}>
              {" "}
              <img
                style={{ marginLeft: "250px" }}
                src={meeting}
                alt="admission"
              />
              <h4 style={{ textDecoration: "underline", marginBottom: "7px" }}>
                {ourServicesInfo[3].service}
              </h4>
              <p style={{ marginBottom: "30px" }}>{ourServicesInfo[3].text}</p>
            </div>
          </div>
          {/* box 2 end */}
          {/* box 3 start */}
          <div className={css.box3}>
            <div className={css.container1Box1}>
              <img src={info} alt="free" style={{ marginLeft: "250px" }} />
              <h4 style={{ textDecoration: "underline", marginBottom: "7px" }}>
                {ourServicesInfo[4].service}
              </h4>
              <p style={{ marginBottom: "50px" }}>{ourServicesInfo[4].text}</p>
            </div>

            <div className={css.container2Box1}>
              {" "}
              <img
                style={{ marginLeft: "250px" }}
                src={hostel}
                alt="admission"
              />
              <h4 style={{ textDecoration: "underline", marginBottom: "7px" }}>
                {ourServicesInfo[5].service}
              </h4>
              <p style={{ marginBottom: "30px" }}>{ourServicesInfo[5].text}</p>
            </div>
            {/** box 4 starts */}
          </div>
          <div className={css.box4}>
            <div className={css.container1Box1}>
              <img src={insurance} alt="free" style={{ marginLeft: "250px" }} />
              <h4 style={{ textDecoration: "underline", marginBottom: "7px" }}>
                {ourServicesInfo[6].service}
              </h4>
              <p style={{ marginBottom: "68px" }}>{ourServicesInfo[6].text}</p>
            </div>

            <div className={css.container2Box1}>
              {" "}
              <img
                src={travel}
                style={{ marginLeft: "250px" }}
                alt="admission"
              />
              <h4 style={{ textDecoration: "underline", marginBottom: "7px" }}>
                {ourServicesInfo[7].service}
              </h4>
              <p style={{ marginBottom: "30px" }}>{ourServicesInfo[7].text}</p>
            </div>
          </div>
          {/** box 4 end */}
        </div>
        <Extra />
        <div className={css.footer}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default StudentServices;
