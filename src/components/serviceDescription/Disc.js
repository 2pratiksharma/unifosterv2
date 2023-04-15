import React, { useState } from "react";
import { motion } from "framer-motion";

import "./disc.scss";
import img1 from "../../assets/freecouns.jpg";
import img2 from "../../assets/hostel.jpg";
import img3 from "../../assets/visa.jpg";
import img4 from "../../assets/interview.jpg";
import { TbHandClick } from "react-icons/tb";

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`Card ${isFlipped ? "is-flipped" : ""}`}
      onMouseEnter={handleFlip}
      onMouseLeave={handleFlip}
    >
      <div className="Card__face Card__face--front">
        <TbHandClick fontSize="3rem" />
        <h3>That's not all!</h3>
      </div>
      <div className="Card__face Card__face--back">
        <button>Explore More</button>
      </div>
    </div>
  );
};

const Disc = () => {
  return (
    <div className="AboutComponent">
      <h3>What we have for you?</h3>
      <div className="row">
        <div className="column">
          <div className="box">
            <div>
              <h1>Free Counseling</h1>
              <p>
                We are here to provide free consultation in line with your
                merit, academic performance, career aspiration, interest,
                financial capacity etc.
              </p>
            </div>
            <div>
              <img src={img1} />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div>
              <h1>Post Arrival Services</h1>
              <p>
                Post arrival services include Accommodation/dormitory facilities
                according to the availability.
              </p>
            </div>
            <div>
              <img src={img2} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="column">
          <div className="box">
            <div>
              <h1>Visa Application</h1>
              <p>
                Our experts work very cordially and sharply in making visa
                application and documentation according to requirements of the
                specific consulate/embassy.
              </p>
            </div>
            <div>
              <img src={img3} />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div>
              <h1>Interview Preparation</h1>
              <p>
                Our trainers will guide you and prepare you for electronic as
                well as face to face interview if necessary.
              </p>
            </div>
            <div>
              <img src={img4} />
            </div>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Disc;
