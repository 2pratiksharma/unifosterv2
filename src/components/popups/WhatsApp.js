import React from "react";
import "./welcome.scss";
import wa from "../../assets/whatsapp.png";

const WhatsApp = () => {
  return (
    <div className="whatsapp-container">
      {/* Add WhatsApp icon */}
      <a href="https://wa.me/message/6OQ76QHM5GHZA1" target="blank">
        <div className="whatsapp-icon">
          <img src={wa} alt="WhatsApp Icon" />
        </div>
      </a>
    </div>
  );
};

export default WhatsApp;
