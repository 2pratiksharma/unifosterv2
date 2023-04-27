import React from "react";
import "./UK.scss";
import UKImg from "../../assets/wallUK.jpg";
import img from "../../assets/imgUK.jpg";
import img2 from "../../assets/imgUK2.jpg";
import NavBar from "../Nav/Nav";
import ScrollBtn from "../button/ScrollBtn";
import Footer from "../Footer/Footer";

const UK = () => {
  return (
    <>
      <NavBar />
      <ScrollBtn />
      <div className="UKBG-container">
        <img src={UKImg} />
        <div className="UKBG-text">
          <h1>Study In UK</h1>
        </div>
      </div>

      {/** block 1 */}
      <div className="UK-main-container">
        <div className="UK-title1">
          <h2>
            Study In <b>UK</b>{" "}
          </h2>
        </div>
        <div className="UK-text1">
          <p>
            Students around the world have long been drawn to study in the UK.
            And, it’s for a good reason. The UK is known for its world-class
            education, diversity, and bustling student cities – making it a
            great place to study abroad. By studying in the UK, you’ll get the
            chance to hear numerous different British accents – including
            English, Irish, Scottish, and Welsh, all of which might sound
            distinct in different regions. Since the UK is so diverse, you’ll
            also be exposed to different English accents from around the globe,
            giving you a real-world listening experience, you might not get at
            home.
          </p>
        </div>

        {/** block 2 */}

        <div className="UK-block2">
          <div className="UK-block2-colum1">
            <h1>Unique Culture</h1>
            <p>
              The unrivalled cultural diversity of life in the UK gives you the
              chance to experience a multicultural environment, meet fellow
              international students and develop a range of desirable skills
              that are necessary to be part of today's global workforce.
            </p>
          </div>
          <div className="UK-block2-column2">
            <h1>Practical study system</h1>
            <p>
              Studying in the UK is beneficial as you get the chance to be
              taught by top professors and academicians. Preprocessors are often
              help the students to complete their course related assignments,
              quizzes, and other practical tasks. Though UK is multicultural
              country so students who interested to study in the UK, they will
              learn more about many cultures and nation.
            </p>
          </div>
        </div>

        <div className="UK-block3">
          <div className="UK-block3-title">
            <h1>Quality Education</h1>
            <p>
              Many countries like to follow the UK’s education system, as its
              quality is considered as the best in the world. The Indian
              education system is also based on that of the UK. UK Education
              System offers a wide choice in selecting your field of study and
              institution. Shorter duration of courses in the UK helps reduce
              tuition and accommodation costs. The English language support to
              help you develop excellent language skills, which has crucial
              importance in the global digital arena and increases one's chances
              of employment it Promotes close student-teacher interaction with a
              provision of combining different subjects into a single course.
            </p>
          </div>
          <div className="UK-block3-img">
            <img src={img} />
          </div>
        </div>

        <div className="UK-block4">
          <div className="UK-block4-img">
            <img src={img2} />
          </div>
          <div className="UK-block4-title">
            <h1>Post-study Work Visa</h1>
            <p>
              Along with your studies, you can work in a part-time job,
              internship or placement and develop valuable skills that will be
              added to your CV. Your university may assist in providing
              placement after studies. Also, now you are eligible to stay back
              in the UK for 2 years after completing your degree under the new
              Graduate Immigration Route.
            </p>
          </div>
        </div>

        {/** block 5 */}
        <div className="UK-block5">
          <div className="UK-block5Col1">
            <h1>Basic Pre Requisites For Bachelor’s </h1>
            <ul>
              <li>
                Certificate for completing 10+2 education from a recognized
                Indian broad with minimum marks.
              </li>
              <li>
                {" "}
                Original academic transcripts from previous academic
                institutions.
              </li>
              <li> Statement of Purpose</li>

              <li>Letters of Recommendations</li>
              <li>Scores of English Proficiency Tests</li>
              <li> Passport and other ID proof</li>
              <li>Bank statements to provide proof for Financial Funds</li>
              <li>Offer Letter</li>
              <li> Student visa </li>
            </ul>
          </div>
          <div className="UK-block5Col2">
            <h1>Basic Pre Requisites For Master's </h1>
            <ul>
              <li> Official Academic transcripts</li>
              <li> Two letters of Recommendations</li>
              <li> Statement of Purpose</li>
              <li>English Proficiency Tests</li>
              <li>A detailed resume</li>
              <li> Financial Statements</li>
              <li>A valid passport</li>
              <li>Offer Letter</li>
              <li>Student Visa</li>
            </ul>
          </div>
          <div className="UK-block5Col3">
            <h1>Basic Pre Requisites For Master's </h1>
            <ul>
              <li>
                A bachelors and master’s degree from a recognized university
                with minimum marks in both programs.
              </li>
              <li> Official academic transcripts</li>
              <li> Research Proposal</li>
              <li> Statement of Purpose</li>
              <li>English Proficiency Tests</li>
              <li> A detailed CV</li>
              <li>Financial statements</li>
              <li> Valid Passport</li>
              <li>Offer Letter</li>
              <li>Student Visa</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UK;
