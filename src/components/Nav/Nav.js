import React, { useState, useEffect } from "react";
import "./nav.scss";
import logo from "../../assets/unifosterLogo.png";
import newLogo from "../../assets/logo512.png";

import UseAnimations from "react-useanimations";
import linkedin from "react-useanimations/lib/linkedin";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLogoChanged, setIsLogoChanged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
      setIsLogoChanged(scrollTop > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoChange = () => {
    setIsLogoChanged(false);
  };

  return (
    <div className={`container ${isScrolled ? "scrolled1" : ""}`}>
      <img
        className={`logo ${isLogoChanged ? "zoom-out" : ""}`}
        src={isLogoChanged ? newLogo : logo}
        alt="Unifoster"
        onAnimationEnd={handleLogoChange}
      />
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar__container">
          <ul className="navbar__menu">
            <li className="navbar__item">
              <a href="/" className="navbar__link">
                Home
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__link">
                About Us
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__link">
                Services
              </a>
            </li>
            <li className="navbar__item">
              <a href="/" className="navbar__link">
                International Students
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="social"></div>
    </div>
  );
};

export default Nav;
