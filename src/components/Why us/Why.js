import React, { useState, useRef, useEffect } from "react";
import "./Why.scss";
import budget from "../../assets/budget.jpg";
import choice from "../../assets/choice.png";

import visa from "../../assets/visa.png";
import deal from "../../assets/deal.png";
import graduate from "../../assets/graduate.png";
import employee from "../../assets/employee.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Why = () => {
  const points = [
    {
      img: choice,
      heading: "Valuable student choice",
      text: "To boost them and strengthen there individual learning needs.",
    },
    {
      img: deal,
      heading: "Collaboratively with other team members.",
      text: "To provide best outcome for our clients.",
    },
    {
      img: visa,
      heading: "Visa process training",
      text: "To avail visa easily",
    },
    {
      img: graduate,
      heading: "Standard & quality of colleges/ universities",
      text: "For a successful career path.",
    },
    {
      img: employee,
      heading: "Attentive to details and well organized",
      text: "To provide error free results.",
    },
  ];

  const ComponentPoints = () => {
    return (
      <div className="banner">
        {points.map((point, i) => (
          <div key={i} className="point">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className="icon"
            >
              <img src={point.img} alt="Point icon" />
            </motion.div>
            <div className="heading">{point.heading}</div>
            <div className="text">{point.text}</div>
          </div>
        ))}
      </div>
    );
  };

  //image animation
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.intersectionRatio >= 0.3);
        setIsLoaded(true);
      },
      {
        threshold: 0.3,
        once: true,
      }
    );
    observer.observe(ref.current);
  }, []);

  return (
    <>
      <div>
        <div className="why-container">
          <div className="why-left">
            <h2 className="why-heading">Why Choose Us?</h2>
            <p className="why-text">
              We understand the challenges of studying in a foreign country and
              are here to help you overcome any obstacles that may arise. Our
              team is knowledgeable about the visa application process, housing
              options, and cultural adjustments, and we are dedicated to
              ensuring that our clients have a smooth and successful study
              abroad experience. Trust us to guide you towards achieving your
              academic goals and making the most of this unique opportunity.
            </p>
            <button className="why-button">
              <NavLink to="/About">Read More </NavLink>
            </button>
          </div>
          <motion.div
            ref={ref}
            initial={false}
            animate={
              isInView
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            onViewportEnter={() => {
              setIsInView(true);
            }}
            className="why-right"
          >
            <motion.img src={budget} alt="placeholder" className="why-img" />
            <h1>Student budget understanding</h1>
            <p className="why-text">
              We offer personalized budgeting assistance to help you make the
              most of your study abroad experience without breaking the bank.
            </p>
          </motion.div>
        </div>
      </div>
      <ComponentPoints />
    </>
  );
};

export default Why;
