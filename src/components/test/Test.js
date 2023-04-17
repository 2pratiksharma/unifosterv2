import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { useSwipeable } from "react-swipeable";
import "./test.scss";
import img1 from "../../assets/bg1_hero.jpg";
import img2 from "../../assets/bg2_hero.png";
import img3 from "../../assets/bg3_hero.jpg";
import img4 from "../../assets/bg4_hero.jpg";

const slidesData = [
  {
    id: 1,
    imageSrc: img1,
    heading: "Study Abroad",
    title: "Apply yourself, Get all the education you can.",
  },
  {
    id: 2,
    imageSrc: img2,
    heading: "Discover New Culture",
    title:
      "Embrace diversity and connect with a global community through our services.",
  },
  {
    id: 3,
    imageSrc: img3,
    heading: "Slide 3 Heading",
    title: "Slide 3 Title",
  },
  {
    id: 4,
    imageSrc: img4,
    heading: "Slide 4 Heading",
    title: "Slide 4 Title",
  },
];

const Test = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const handleNextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSwipe = (eventData) => {
    const { dir } = eventData;
    if (dir === "Left") {
      handleNextSlide();
    } else if (dir === "Right") {
      handlePrevSlide();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide();
    }, 10000); // change slide after 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <useSwipeable onSwiped={handleSwipe}>
        <div className="slider">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={slidesData[activeIndex].id}
              className="slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.1 }}
              exit={{ opacity: 0 }}
            >
              <img
                src={slidesData[activeIndex].imageSrc}
                alt={`Slide ${activeIndex + 1}`}
              />
              <div className="slide-content">
                <h1 className="slide-heading">
                  {slidesData[activeIndex].heading}
                </h1>
                <h2 className="slide-title">{slidesData[activeIndex].title}</h2>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </useSwipeable>
      <div className="controls">
        {/**  <button className="prev" onClick={handlePrevSlide}>
            <MdKeyboardArrowLeft />
          </button> */}
        <div className="dots">
          {slidesData.map((slide, index) => (
            <button
              key={slide.id}
              className={`dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
        {/**  <button className="next" onClick={handleNextSlide}>
            <MdKeyboardArrowRight />
          </button> */}
      </div>
    </div>
  );
};

export default Test;
