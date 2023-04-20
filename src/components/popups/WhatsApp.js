import React from "react";
import "./welcome.scss";
import wa from "../../assets/whatsapp.png";

const WhatsApp = () => {
  return (
    <div className="whatsapp-container">
      {/* Add WhatsApp icon */}
      <a href="https://api.whatsapp.com/message/6OQ76QHM5GHZA1?autoload=1&app_absent=0">
        <div className="whatsapp-icon">
          <img src={wa} alt="WhatsApp Icon" />
        </div>
      </a>
    </div>
  );
};

export default WhatsApp;
