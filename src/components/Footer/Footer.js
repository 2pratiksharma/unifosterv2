import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaSnapchat,
} from "react-icons/fa";
import {
  TiSocialFacebookCircular,
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialInstagramCircular,
} from "react-icons/ti";
import "./footer.scss";
import { HiOfficeBuilding } from "react-icons/hi";
import mainLogo from "../../assets/unifosterLogo.png";
import { TbBrandSnapchat } from "react-icons/tb";

const Footer = () => {
  return (
    <>
      <div className="main-footer">
        <footer className="footer">
          <div className="footer__col1">
            <img
              src={mainLogo}
              style={{ maxWidth: "170px" }}
              alt="Company logo"
              className="footer__logo"
            />
            <p className="footer__text">
              `Unleash your dreams with us and start your process today with us.
            </p>
          </div>
          <div className="footer__col2">
            <h3 className="footer__title">Office</h3>
            <p className="footer__address">
              {" "}
              <HiOfficeBuilding className="footer-sub-icon" /> Telangana,
              Karimnagar
              <br />
              Aslami complex City center mezzanine
              <br />
              floor C-16 and C-20, India
            </p>
          </div>
          <div className="footer__col3">
            <h3 className="footer__title">Contacts</h3>
            <ul className="footer__contacts">
              <li>
                <span className="footer__contact-number">
                  {" "}
                  <FaPhone /> +966 569500015
                </span>
                <span className="footer__contact-location">Saudi</span>
              </li>
              <li>
                <span className="footer__contact-number">
                  {" "}
                  <FaPhone /> +966 546608309
                </span>
                <span className="footer__contact-location">Saudi</span>
              </li>
            </ul>
          </div>
          <div className="footer__col4">
            <h3 className="footer__title">Get in touch</h3>
            <ul className="footer-email">
              <li>
                {" "}
                <FaEnvelope className="footer-email-icon" /> info@unifoster.com
              </li>
              <li>
                <FaEnvelope className="footer-email-icon" />{" "}
                faatin@unifoster.com
              </li>
            </ul>
            <ul className="footer__social-media">
              <li>
                <a
                  href="https://www.snapchat.com/add/unifoster_01?share_id=zF957NMp6mg&locale=en-GB"
                  target="_blank"
                >
                  <i className="fab fa-facebook-square">
                    {" "}
                    <TbBrandSnapchat style={{ fontSize: "2rem" }} />
                  </i>
                  <span className="footer__social-media-name">Snapchat</span>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Unifoster_?t=tLpZecq-V20QjmBWRuN9vg&s=09"
                  target="_blank"
                >
                  <i className="fab fa-twitter-square">
                    <TiSocialTwitterCircular style={{ fontSize: "2rem" }} />
                  </i>
                  <span className="footer__social-media-name">Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/unifoster_?igshid=YmMyMTA2M2Y="
                  target="_blank"
                >
                  <i className="fab fa-instagram-square">
                    {" "}
                    <TiSocialInstagramCircular style={{ fontSize: "2rem" }} />
                  </i>
                  <span className="footer__social-media-name">Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/unifoster-448bb326b"
                  target="_blank"
                >
                  <i className="fab fa-linkedin">
                    {" "}
                    <TiSocialLinkedinCircular style={{ fontSize: "2rem" }} />
                  </i>
                  <span className="footer__social-media-name">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <div className="footer-credits">
          Unifoster © 2023 - All Rights Reserved | Designed & Developed by
          Pratik sharma
        </div>
      </div>
    </>
  );
};

export default Footer;
