import React from "react";
import "./StudentInfo.scss";
import img from "../../assets/inimg.jpg";

const StudentInfo = () => {
  return (
    <div className="student-info">
      <div className="image-circle">
        <img src={img} />
      </div>
      <div className="text-circle">
        <p>
          Studying abroad is not just an opportunity to earn a degree, but it's
          an adventure of a lifetime. Imagine exploring a new country,
          experiencing a different culture, and making new friends from all over
          the world. Studying abroad offers endless opportunities for personal
          and professional growth, and it's a chance to challenge yourself and
          step out of your comfort zone. With so many benefits, studying abroad
          is truly a once-in-a-lifetime opportunity that will change your life
          forever. So why not take the leap and start your adventure today?
        </p>
      </div>
    </div>
  );
};

export default StudentInfo;
