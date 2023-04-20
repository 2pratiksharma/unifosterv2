import React from "react";
import "./EUR.scss";
import EURImg from "../../assets/wallEUR.jpg";
import img from "../../assets/imgEur.jpg";
import img2 from "../../assets/imgEur2.jpg";
import NavBar from "../Nav/Nav";
import Logoanim from "../Nav/Logoanim";
import Footer from "../Footer/Footer";

const EUR = () => {
  return (
    <>
      <NavBar />
      <Logoanim />
      <div className="EURBG-container">
        <img src={EURImg} />
        <div className="EURBG-text">
          <h1>Study In Europe</h1>
        </div>
      </div>

      {/** block 1 */}
      <div className="EUR-main-container">
        <div className="EUR-title1">
          <h2>
            Study In <b>Europe</b>{" "}
          </h2>
        </div>
        <div className="EUR-text1">
          <p>
            Experience a world-class higher education in Europe and benefit from
            an extensive choice of bachelor’s and master’s courses, doctoral
            study programs and more. Explore diverse languages and cultures in a
            welcoming, social environment. Gain international experience, skills
            and knowledge. Study in Europe provides information about study
            opportunities in 33 European countries. These countries fully
            participate in Erasmus+, the EU's program supporting students from
            EU and partner countries across the world to study in Europe. Europe
            is the birth place of inventions, discoveries and innovations, that
            paved way to easier living in the modern times. From the time of
            industrial revolution, Europe continues to be the leader in world
            industry. Studying in Europe will pave way to a better, brighter
            future.
          </p>
        </div>

        {/** block 2 */}

        <div className="EUR-block2">
          <div className="EUR-block2-colum1">
            <h1>STUDY IN DENMARK</h1>
            <p>
              The degree student earns at Danish universities or colleges will
              be internationally recognized and valuable for meeting future
              aspects. The education system and facilities offered by most of
              the universities in Denmark are highly appreciated all over the
              world. Study in Denmark is not as expensive as you think. Tuition
              fees in Denmark vary from the level and duration of the education.
              With premium education, Denmark also provides exceptional career
              opportunities to international students. They can also work while
              studying but once they get their degree, colleges or universities
              help students to get placed in reputed companies for internships.
              After completion of educations, international students get job
              search visa for 6 months in which students can find a suitable job
              for themselves to begin their career. Further, they can extend
              their visa on the basis of work permit. International Students can
              also apply for Erasmus Mundus Scholarship Program under which all
              the expenses are funded by European Union for both EU and Non-EU
              students.
            </p>
          </div>
          <div className="EUR-block2-column2">
            <h1>STUDY IN SWEDEN</h1>
            <p>
              Studying in Sweden is different from studying in other countries
              because Swedish universities have an open climate with a strong
              focus on group work. The Swedish education system focuses more on
              your academic interests than pushing you to achieve a grade.
              Swedish universities prize personal initiative and independent
              thinking; if you choose to study in Sweden, you will be expected
              and required to take an active role and contribute with your
              opinions and ideas in lectures, seminars, and group discussions.
              This will give you the opportunity to develop your individual
              strengths and cultivate you academic abilities. Sweden is one of
              the world’s most modern countries, and the birthplace of many
              successful corporations. A number of successful inventions have
              resulted from research at Swedish universities and companies,
              including the computer mouse, Bluetooth, and internet applications
              such as Spotify and Skype. If you are an international student
              from a European Union country, you have another good reason to
              study in Sweden: tuition is free. Although the cost of living can
              be high in Sweden, it more than evens out when you factor in free
              tuition. Almost everyone in Sweden speaks English nowadays; 89 per
              cent of Swedes are bilingual, so international students from
              English-speaking countries need not worry about not being able to
              communicate if they don’t speak Swedish.
            </p>
          </div>
        </div>

        <div className="EUR-block3">
          <div className="EUR-block3-title">
            <h1>STUDY IN NORWAY</h1>
            <p>
              The student life in Norway is one of the most enjoyable and
              enriching in the world. The cities are trendy, and the natural
              scenery is breathtaking. Whether you study in the city or out in
              the country, you will discover a friendly community with good
              living circumstances and fascinating work prospects to put your
              new talents to the test. And, best of all, the majority of
              Norway’s higher education is free. Norwegians have one of the
              greatest living standards in the world. There is a low crime rate,
              low unemployment, a good welfare system, and a good work-life
              balance in the country. public Norwegian institutions do not
              charge tuition fees to international students, and this applies to
              all levels of study, including bachelor’s, master’s, and doctoral
              degrees. Student housing is likewise subsidized by the government,
              ensuring that it is both affordable and of excellent quality.
              people in Norway speak English as well as their first language
              which makes it very easy for international students to blend in
              and get around the city without any problem. Most of the
              universities in Norway offer English taught programs which helps
              international students to choose their desired course in their
              preferred university. If you’re looking for a study destination
              packed with nature, history, big ideas, and firm principles, why
              not make your way to Norway...
            </p>
          </div>
          <div className="EUR-block3-img">
            <img src={img} />
          </div>
        </div>

        <div className="EUR-block4">
          <div className="EUR-block4-img">
            <img src={img2} />
          </div>
          <div className="EUR-block4-title">
            <h1>STUDY IN FINLAND</h1>
            <p>
              Finland's world-leading higher education system offers more than
              500 English-taught bachelor's and master's degree programs in 13
              universities and 22 universities of applied sciences. The
              universities also offer English-taught doctoral degree options.
              Finnish higher education institutions have over 20 000
              international students studying in several locations around
              Finland. The international students will not have to worry about
              learning a new language, and they can continue their studies in
              Finland with English language as there are many courses to study
              in Finland in English Master’s Degree. There are English language
              tests to prove the proficiency of candidate’s English, and they
              are generally IELTS, TOEFL or C1 Cambridge Advanced. The
              Universities in Finland offer several scholarships to local and
              international students alike. Scholarships and Grants are a great
              way to fund your Study in Finland, there are number of them
              offered by the educational institutes. In some cases, even a
              student’s home country offers grants for the students going to
              study abroad. One should do a thorough research on the
              scholarships offered by both Universities and government.
              International students in Finland are allowed to work with some
              restrictions while they study in Finland. The students are allowed
              to work at part time jobs. There is no weekly limit set on the
              working hours, however, the average of the working hours for an
              academic term should not exceed the average of 25 hours a week.
              The student are allowed to work part time in their field of study.
              Many Universities in Finland offer career and employment services
              which can be helpful for the international students. The Non-Eu
              students have the option to apply for one year extension to work
              after study in Finland. There are number of job opportunities
              after MS in Finland. Students who already have secured an
              employment, or the students who are willing to stay back and look
              for employment can apply for the extension in the residence permit
              for Finland.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EUR;
