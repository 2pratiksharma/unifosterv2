import React, { useState, useEffect } from "react";
import mainLogo from "../../assets/unifosterLogo.png";
import secondaryLogo from "../../assets/logo512.png";
import "./logo.scss";
import { NavLink } from "react-router-dom";

const Logoanim = () => {
  const [showNewLogo, setShowNewLogo] = useState(false);

  const [showLogo2, setShowLogo2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowLogo2(true);
      } else {
        setShowLogo2(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="logo">
      <NavLink to="/">
        <img
          className={`logo__img ${
            showLogo2 ? "logo__img--zoom-out" : "logo__img--zoom-in"
          }`}
          src={showLogo2 ? secondaryLogo : mainLogo}
          alt="Logo"
        />
      </NavLink>
    </div>
  );
};

export default Logoanim;
