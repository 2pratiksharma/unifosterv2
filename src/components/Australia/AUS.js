import React from "react";
import "./AUS.scss";
import AUSImg from "../../assets/wallAUS.jpg";
import img from "../../assets/imgAus.jpg";
import img2 from "../../assets/imgAus2.jpg";
import NavBar from "../Nav/Nav";
import ScrollBtn from "../button/ScrollBtn";
import Footer from "../Footer/Footer";

const AUS = () => {
  return (
    <>
      <NavBar />
      <ScrollBtn />
      <div className="AUSBG-container">
        <img src={AUSImg} />
        <div className="AUSBG-text">
          <h1>Study In Australia</h1>
        </div>
      </div>

      {/** block 1 */}
      <div className="AUS-main-container">
        <div className="AUS-title1">
          <h2>
            Study In <b>Australia</b>{" "}
          </h2>
        </div>
        <div className="AUS-text1">
          <p>
            Australia has some of the world's most popular universities which
            offer the best education and research facilities, which encourages
            students to think, create and innovate for the new world. Studying
            in Australia is helping students to develop interpersonal skills,
            problem-solving, leadership, and humanity to grow as an individual.
            However, the country's multicultural acceptance, welcoming nature,
            world-class education, and high jumping opportunities are some of
            the attractive factors for international students.
          </p>
        </div>

        {/** block 2 */}

        <div className="AUS-block2">
          <div className="AUS-block2-colum1">
            <h1>High-Quality Education</h1>
            <p>
              When it comes to high-quality education - Australia stands strong
              on its feet having world-class education amenities, qualified
              academics, the best campus life, and a wide range of employment
              prospects. Australian universities provide best-in-class research
              facilities and module training methodologies making it one of the
              best choices among international students. The finely made
              curriculum delivers learning outcomes like critical thinking,
              Linguistic ability, Creative thinking, Problem-solving, Analytical
              thinking, Ethical learning and so much more.
            </p>
          </div>
          <div className="AUS-block2-column2">
            <h1>Diverse and vibrant student life</h1>
            <p>
              Australia is well known for being a warm and welcoming place to
              study for international students, which is another of the benefits
              of studying in Australia for international students. Australian
              universities offer a diverse mix of students and a vibrant
              environment so that students from all corners of the world feel
              welcome. Universities offer excellent support facilities to
              international students and have programs, facilities and
              activities specially meant to help foreign students settle in and
              form new bonds. With students coming from varied backgrounds,
              Australia is the best place to gain international exposure and
              learn about different languages and cultures.
            </p>
          </div>
        </div>

        <div className="AUS-block3">
          <div className="AUS-block3-title">
            <h1>Post study work visa</h1>
            <p>
              Another big benefit of studying in Australia is the long post
              study work visa (PSW) available to international students.
              Australian university graduates don't need a sponsor or job to
              apply for this visa and can continue to live and work in Australia
              for 2-4 years after completing their studies. This visa known as
              the Post Study Work Permit or Temporary Graduate visa (Subclass
              485) gives international students extended post-study work rights,
              making it one of the longest duration visas available to
              international students. The visa allows students to bring their
              immediate family members to Australia.
            </p>
          </div>
          <div className="AUS-block3-img">
            <img src={img} />
          </div>
        </div>

        <div className="AUS-block4">
          <div className="AUS-block4-img">
            <img src={img2} />
          </div>
          <div className="AUS-block4-title">
            <h1>Working while Studying</h1>
            <p>
              Students can work part-time while studying. This is one of the big
              benefits of studying in Australia for international students
              including Indian students. They can work for a maximum of 40 hours
              during their course and can work for an unrestricted number of
              hours during vacations. Those pursuing a master’s degree or a
              doctoral degree have no restrictions on work hours. Students can
              easily get part-time jobs while staying on a student visa in
              Australia and can develop communication and other important
              interpersonal skills while getting paid for work. They can do
              basic jobs in the university campuses, at grocery stores, retail
              shops, etc. The minimum wage is around 18 Australian dollars per
              hour. Students can use this income to pay for their accommodation,
              food, and travel expenses with this and also save up to explore
              the country. It comes as no surprise that this is one of the main
              benefits of studying in Australia for international students.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AUS;
