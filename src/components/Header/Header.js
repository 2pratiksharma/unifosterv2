import React from "react";
import twitter from "react-useanimations/lib/twitter";
import UseAnimations from "react-useanimations";

const Header = () => {
  return (
    <div className="Header-container">
      <div className="Header-social">
        <UseAnimations animation={twitter} size={56} />
      </div>
      <div className="Header-contact"></div>
    </div>
  );
};

export default Header;
