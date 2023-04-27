import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./nav.scss";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/unifosterLogo.png";
import { motion } from "framer-motion";

//icons
import { FaSnapchatGhost } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <div className="contact-info-container">
        {/* left column */}
        <div className="social-icons-container">
          <a
            href="https://www.snapchat.com/add/unifoster_01?share_id=zF957NMp6mg&locale=en-GB"
            target="_blank"
          >
            <i className="fab fa-facebook">
              <FaSnapchatGhost />
            </i>
          </a>
          <a
            href="https://instagram.com/unifoster_?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <i className="fab fa-twitter">
              <AiFillInstagram />
            </i>
          </a>
          <a
            href="https://www.linkedin.com/in/unifoster-448bb326b"
            target="_blank"
          >
            <i className="fab fa-instagram">
              <BsLinkedin />
            </i>
          </a>
          <a
            href="https://twitter.com/Unifoster_?t=tLpZecq-V20QjmBWRuN9vg&s=09"
            target="_blank"
          >
            <i className="fab fa-linkedin">
              <BsTwitter />
            </i>
          </a>
        </div>
        {/* right column */}
        <div className="contact-numbers-container">
          <div className="contact-number">
            <p className="number">+91 9866553616</p>
            <p className="location">India</p>
          </div>
          <div className="contact-number">
            <p className="number">+966 564499994</p>
            <p className="location">Saudi</p>
          </div>
          <div className="contact-number-last">
            <p className="number">+966 569500015</p>
            <p className="location">Saudi</p>
          </div>
        </div>
      </div>

      <div className="nav-main-container">
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <NavLink to="/">
                {" "}
                <img src={Logo} style={{ maxWidth: "240px" }} />
              </NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="ms-auto my-2 my-lg-0"
                style={{
                  maxHeight: "500px",
                  fontSize: "1.5rem",
                }}
                navbarScroll
              >
                <NavLink to="/">
                  <Nav.Link href="#action1">Home</Nav.Link>
                </NavLink>
                <NavLink to="/About">
                  <Nav.Link href="#action1">About</Nav.Link>
                </NavLink>
                <NavLink to="/services">
                  <Nav.Link href="#action1">Services</Nav.Link>
                </NavLink>
                <NavDropdown title="Plan Your Studies" id="Plan Your Studies">
                  <NavLink to="/USA">
                    <NavDropdown.Item href="#action3">
                      Study In USA
                    </NavDropdown.Item>
                  </NavLink>
                  <NavLink to="/UK">
                    <NavDropdown.Item href="#action3">
                      Study In UK
                    </NavDropdown.Item>
                  </NavLink>

                  <NavLink to="/Canada">
                    <NavDropdown.Item href="#action3">
                      Study In Canada
                    </NavDropdown.Item>
                  </NavLink>
                  <NavLink to="/Europe">
                    <NavDropdown.Item href="#action3">
                      Study In Europe
                    </NavDropdown.Item>
                  </NavLink>
                  <NavLink to="/Australia">
                    <NavDropdown.Item href="#action3">
                      Study In Australia
                    </NavDropdown.Item>
                  </NavLink>
                </NavDropdown>
                <NavLink to="/students">
                  <Nav.Link href="#action1">International Students</Nav.Link>
                </NavLink>
                <NavLink to="/ApplyNow">
                  <Nav.Link className="register-yourslef-btn" href="#action1">
                    Register Yourself
                  </Nav.Link>
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default NavBar;
