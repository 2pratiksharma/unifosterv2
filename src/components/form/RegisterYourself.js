import "./registeryou.scss";
import React, { useState } from "react";
import { FaSnapchatGhost } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { AiFillInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import axios from "axios";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Logoanim from "../Nav/Logoanim";
import NavBar from "../Nav/Nav";
import Footer from "../Footer/Footer";

const RegisterYourself = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    num: "",
    Country: "",
    course: "",
    startDate: "",
    degree: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api", formData)
      .then((response) => {
        console.log(response.data);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Logoanim />
      <NavBar />
      <div className="wrapperA">
        <div className="form-container">
          <div id="contact-container">
            {" "}
            <div className="contact-info">
              <h1>Register Yourself</h1>
              <h4>Contact Information</h4>
              <p>
                Fill up the form and our experst will get back to you within 24
                hours.
              </p>

              <div className="icon-text">
                <i className="icon">
                  <MdEmail />
                </i>
                <span>faatin@unifoster.com</span>
              </div>
              <div className="icon-text">
                <i style={{ color: "#7800ff" }} className="icon">
                  <HiOutlineLocationMarker />
                </i>
                <span style={{ color: "#7800ff" }}>
                  Telengana, karimnagar Aslami complex City centre mezanin
                  floor  C-16 and C-20
                </span>
              </div>
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
                  target="_blank"
                  className="icon-circle"
                >
                  <i className="icon">
                    <AiOutlineWhatsApp />
                  </i>
                </a>
              </div>
            </div>
          </div>

          {/** thank you message */}

          <div id="form-container"> </div>
          {isFormSubmitted ? (
            <div className="thank-you-message">
              <h1>Thank You!</h1>
              <p>
                Thank you for your Response. Our experts will get in touch with
                you in 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="firstName">First Name -</label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name -</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/** row 2 */}
              <div className="col">
                <div className="form-group">
                  <label htmlFor="email">E-Mail -</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="num">Contact Number -</label>
                  <input
                    id="num"
                    name="num"
                    value={formData.num}
                    onChange={handleChange}
                    placeholder="Optional"
                    type="phone"
                  />
                </div>
              </div>
              {/** row 3 */}
              <div className="col">
                <div className="form-group">
                  <label htmlFor="country">
                    Which Country are you planning to study in -
                  </label>
                  <input
                    id="country"
                    name="Country"
                    value={formData.Country}
                    onChange={handleChange}
                    placeholder="UK, USA, Europe, Australia, Canada"
                    type="text"
                  />
                </div>
              </div>
              {/** row 4 */}
              <div className="col">
                <div className="form-group">
                  <label htmlFor="course">
                    Which course you are planning to opt -
                  </label>
                  <input
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    type="text"
                  />
                </div>
              </div>

              <div className="col">
                <div className="form-group">
                  <label htmlFor="course">
                    Which Degree you are planning to opt -
                  </label>
                  <input
                    id="degree"
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    placeholder="UG,  PG,  PHD"
                    type="text"
                  />
                </div>
              </div>

              {/** row 5 */}
              <div className="col">
                <div className="form-group">
                  <label htmlFor="startDate">
                    When are you intrested in starting your studies -
                  </label>
                  <input
                    id="startDate"
                    name="startDate"
                    type="text"
                    value={formData.startDate}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/** send button */}

              <div className="col">
                <div className="form-group solo right">
                  <button type="submit" className="primary">
                    Send Response
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RegisterYourself;
