import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./btn.scss";

const ScrollBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const showBtnThreshold = window.innerHeight / 2;
    setShowBtn(currentScrollPos > showBtnThreshold);
  };
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`scroll-btn ${showBtn ? "show" : ""}`}
      onClick={handleClick}
    >
      <IoIosArrowUp />
    </div>
  );
};

export default ScrollBtn;
