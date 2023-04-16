import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import "./footer.scss";
import { HiOfficeBuilding } from "react-icons/hi";
import logo from "../../assets/logo512.png";

const Footer = () => {
  return (
    <div className="main-footer-container">
      <div className="footer-container">
        <div className="footer-column">
          <img src="logo.png" alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Unleash your dreams with us and start your process today with us.
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">
            <FaMapMarkerAlt className="footer-icon" /> Office
          </h3>
          <p className="footer-text">
            <HiOfficeBuilding className="footer-sub-icon" /> Telangana,
            Karimnagar
            <br />
            Aslami complex City center mezzanine
            <br />
            floor C-16 and C-20, India
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">
            <FaPhone className="footer-icon" /> Contacts
          </h3>
          <p className="footer-text">
            <FaPhone className="footer-sub-icon" /> +966 569500015
            <br />
            <FaPhone className="footer-sub-icon" /> +966 546608309
            <br />
          </p>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">
            <TiSocialFacebookCircular className="footer-icon" /> Get in Touch
          </h3>
          <p className="footer-text">
            <TiSocialFacebookCircular className="footer-sub-icon" /> Facebook
            <br />
            <TiSocialTwitterCircular className="footer-sub-icon" /> Twitter
            <br />
            <TiSocialLinkedinCircular className="footer-sub-icon" /> LinkedIn
            <br />
            <TiSocialInstagramCircular className="footer-sub-icon" /> Instagram
            <br />
          </p>
          <p className="footer-text">
            <FaEnvelope className="footer-sub-icon" /> info@unifoster.com
            <br />
            <FaEnvelope className="footer-sub-icon" /> faatin@unifoster.com
          </p>
        </div>
      </div>
      <div>
        <p>
          {" "}
          Unifoster © 2023 - All Rights Reserved || Designed & Developed by
          Pratik sharma
        </p>
      </div>
    </div>
  );
};

export default Footer;
