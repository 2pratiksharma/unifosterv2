import React, { useState } from "react";
import { FaTimes } from "react-icons/fa"; // import hamburger and cross icons
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../../assets/unifosterLogo.png";
import { FaSnapchatGhost, FaPhoneAlt } from "react-icons/fa";

import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin, BsTwitter, BsGlobeAmericas } from "react-icons/bs";
import { BiHomeCircle } from "react-icons/bi";
import { GrContactInfo, GrBusinessService } from "react-icons/gr";
import { MdOutlineMedicalInformation } from "react-icons/md";
import { BiMenuAltRight } from "react-icons/bi";
import "./nav.scss";
import bg from "../../assets/navbg.jpg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const [isHamburger, setIsHamburger] = useState(true); // track whether to show hamburger or cross icon

  const handleClose = () => {
    setShow(false);
    setIsHamburger(true); // reset to hamburger icon when offcanvas closes
  };

  const handleShow = () => {
    setShow(true);
    setIsHamburger(false); // switch to cross icon when offcanvas opens
  };

  return (
    <div className="main-nav-wrap">
      <Button variant="none" className="offcanvas-btn" onClick={handleShow}>
        {isHamburger ? <BiMenuAltRight /> : <FaTimes />}{" "}
        {/* show hamburger or cross icon based on state */}
      </Button>

      <Offcanvas className="canvasBG" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img
              src={Logo}
              style={{ width: "300px", borderBottom: "2px solid #7800ff" }}
              alt="Logo"
            />
            <p className="nav-text">
              Guiding you towards global opportunities for a brighter future.
            </p>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="navigation-links">
            <nav>
              <ul>
                <li>
                  <i>
                    <BiHomeCircle />
                  </i>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  {" "}
                  <i>
                    <MdOutlineMedicalInformation />
                  </i>{" "}
                  <NavLink to="/About">About Us</NavLink>
                </li>
                <li>
                  {" "}
                  <i>
                    <GrBusinessService />
                  </i>
                  <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                  <i>
                    <BsGlobeAmericas />
                  </i>
                  <NavLink to="/students"> International Students</NavLink>
                </li>
                <li className="planstudy-nav">
                  <DropdownButton
                    id="dropdown-basic-button"
                    title="Plan Your Studies"
                  >
                    <Dropdown.Item href="#/action-1">
                      Study In USA
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Study In UK</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Study In Canada
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Study In Europe
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Study In Australia
                    </Dropdown.Item>
                  </DropdownButton>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            <div className="social-media">
              <a
                href="https://instagram.com/unifoster_?igshid=YmMyMTA2M2Y="
                target="_blank"
                className="icon-circle"
              >
                <i className="icon">
                  <AiFillInstagram />
                </i>
              </a>
              <a
                href="https://www.snapchat.com/add/unifoster_01?share_id=zF957NMp6mg&locale=en-GB"
                target="_blank"
                className="icon-circle"
              >
                <i className="icon">
                  {" "}
                  <FaSnapchatGhost />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/unifoster-448bb326b"
                target="_blank"
                className="icon-circle"
              >
                <i className="icon">
                  <BsLinkedin />
                </i>
              </a>
              <a
                href="https://twitter.com/Unifoster_?t=tLpZecq-V20QjmBWRuN9vg&s=09"
                target="_blank"
                className="icon-circle"
              >
                <i className="icon">
                  <BsTwitter />
                </i>
              </a>
              <a
                href="https://api.whatsapp.com/message/6OQ76QHM5GHZA1?autoload=1&app_absent=0"
                rem
                target="_blank"
                className="icon-circle"
              >
                <i className="icon">
                  <AiOutlineWhatsApp />
                </i>
              </a>
            </div>
            <div className="contact-info-nav">
              <h1>
                {" "}
                <i>
                  <GrContactInfo />
                </i>{" "}
                Contact Info -
              </h1>
              <p>
                <i>
                  {" "}
                  <AiOutlineWhatsApp />
                </i>{" "}
                India - +91 9866553616
              </p>
              <p>
                {" "}
                <i>
                  {" "}
                  <AiOutlineWhatsApp />
                </i>{" "}
                Saudi - +966 564499994
              </p>
              <p>
                <i>
                  <FaPhoneAlt />
                </i>
                Saudi - +966 569500015
              </p>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default NavBar;
