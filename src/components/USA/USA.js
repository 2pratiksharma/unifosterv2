import React from "react";
import "./USA.scss";
import usaImg from "../../assets/wallUSA.jpg";
import img from "../../assets/USAimg.jpg";
import img2 from "../../assets/usaimg2.jpg";
import NavBar from "../Nav/Nav";
import Logoanim from "../Nav/Logoanim";
import Footer from "../Footer/Footer";

const USA = () => {
  return (
    <>
      <NavBar />
      <Logoanim />
      <div className="usaBG-container">
        <img src={usaImg} />
        <div className="usaBG-text">
          <h1>Study In USA</h1>
        </div>
      </div>

      {/** block 1 */}
      <div className="USA-main-container">
        <div className="USA-title1">
          <h2>
            STUDY IN <b>USA</b>{" "}
          </h2>
        </div>
        <div className="USA-text1">
          <p>
            Higher studies in the USA is a dream for many International
            students. When you continue your studies in the U.S., you are making
            a choice to broaden not only your educational opportunities, but
            your cultural experience, as well. Whether you attend a small,
            private college in a small town or a university situated in the
            middle of a large urban area, most universities offer a variety of
            student clubs and organizations to match the wide array of student
            interests. You can have the opportunity to immerse yourself in
            American culture, meeting new people and making new friends, through
            different organizations and associations. There are different
            institutions offering varies study choices and levels of
            affordability to suit every student like, State and Private Colleges
            / Universities Community Colleges Institutes of Technology
          </p>
        </div>

        {/** block 2 */}

        <div className="block2">
          <div className="block2-colum1">
            <h1>Campus Life Experience</h1>
            <p>
              College life in the United States offers a unique experience for
              international students. Living on campus provides a supportive and
              immersive environment for learning and personal growth. Students
              can join clubs and organizations, attend sports events, and
              participate in cultural activities. Living in a dormitory also
              offers opportunities to make lifelong connections with classmates
              from around the world. With access to a range of resources and
              services, international students can thrive academically and
              socially on US college campuses.
            </p>
          </div>
          <div className="block2-column2">
            <h1>Flexible Course to Study</h1>
            <p>
              Most American universities will feature a wide variety of
              electives and complementary programs, sometimes with other
              colleges and universities within their own region or consortium.
              This provides those studying abroad in America with a wide range
              of possible opportunities to pursue coursework beyond your major.{" "}
            </p>
          </div>
        </div>

        <div className="USA-block3">
          <div className="USA-block3-title">
            <h1>International opportunities</h1>
            <p>
              Finally, whether it’s the networks you build, the degrees you
              earn, the roles you hold, or the places you go, when you’re
              studying in US, you’re building the pathway to all kinds of future
              opportunities. After you complete your college program, you might
              apply for an internship, or find another program to pursue. You
              might meet your future co-founder in your classroom, or be
              inspired to stay connected to leaders within your community.
              Whatever you decide to do next, when you pursue a study abroad
              opportunity, your options will only grow. offerings, as well as
              the campus student center. Your time studying abroad can be
              enriched by taking part in the social and cultural scene
              surrounding you, and you will likely find that U.S. campuses
              provide a rich variety academic, cultural and athletic activities
              that add new dimensions to your life.
            </p>
          </div>
          <div className="USA-block3-img">
            <img src={img} />
          </div>
        </div>

        <div className="USA-block4">
          <div className="USA-block4-img">
            <img src={img2} />
          </div>
          <div className="USA-block4-title">
            <h1>Global Education and Long-Term Career Prospects</h1>
            <p>
              Experience in an international setting is a marketable commodity.
              The United States is not the only country seeking strong
              candidates when hiring; international students are in high demand
              elsewhere, as well. In recent years, international companies have
              become much more proactive in recruiting from the pool of strong
              international student graduates. Many employers seek the wide
              range of knowledge, adaptability and experience that international
              students acquire by studying in the United States. Companies in
              the U.S. are increasingly seeking to become a strong presence in
              the global marketplace.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default USA;
