import React from "react";
import "./EUR.scss";
import EURImg from "../../assets/wallEUR.jpg";
import img from "../../assets/imgEur.jpg";
import img2 from "../../assets/imgEur2.jpg";
import NavBar from "../Nav/Nav";
import ScrollBtn from "../button/ScrollBtn";
import Footer from "../Footer/Footer";

const EUR = () => {
  return (
    <>
      <NavBar />
      <ScrollBtn />
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
        {/** block 4 */}

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
        {/** block 5 */}

        <div className="EUR-block5">
          <div>
            <h1>STUDY IN AUSTRIA</h1>
            <p>
              For such a small country, the excellence of Austria’s universities
              is recognized worldwide. Many of them rank highly in international
              university rankings, ensuring you of a good quality education
              should you decide to study here. As well as that, the bonus for
              students originating elsewhere in the European Union is that
              tuition at any of the public universities is free. Even if you are
              coming from a country outside the EU, the fees are very reasonable
              and lower than many in the rest of Europe - with around 1,500 EUR
              per year. The private universities can set their own rates which
              can be considerably higher, but there is so much choice for
              international students, you are sure to find one that suits your
              budget and your educational aspiration. Many international
              students have chosen to study in Austria for a Bachelors or
              Master’s degree; on average, around 15% of the student body come
              from abroad, ensuring a diverse and multicultural study
              environment. Although the cost of living is moderate throughout
              Austria, the standard of living is among the highest in Europe.{" "}
            </p>
          </div>
          <div>
            <h1>STUDY IN NETHERLAND</h1>
            <p>
              In Europe, the Netherlands was very early to adopt the
              Bachelor/Master system and offer degree programs in English. This
              has led to one of the largest selections of courses on the
              continent. You can choose between plenty of Bachelor and Master
              degrees at around 70 institutions of higher education. The tuition
              fees for non-EU students vary from school to school and from
              program to program. Bachelor’s program typically cost between
              6,000 and 15,000 euros per year; Master’s program in Holland
              usually cost between 8,000 and 20,000 euros per year. Some of the
              world’s largest companies are Dutch, and many global groups have
              their European headquarters in the Netherlands. Paired with the
              country’s international mindset, you find a workforce that is
              highly proficient in English and very welcoming towards foreign
              employees. Those are pristine conditions for international
              students. If you graduate with a Bachelor’s or Master’s degree
              from a Dutch university, you will stand a good chance at also
              finding a job and staying for a longer time.
            </p>
          </div>
          <div>
            <h1>STUDY IN GERMANY</h1>
            <p>
              Germany is one of the most industrialized countries in the world.
              A global forerunner in industry and technology, Germany is a
              highly developed country with an excellent standard of living and
              a social market economy widely considered to be one of the most
              efficient in the world. For two consecutive years, Germany has
              been ranked the best place to study abroad in Europe and third in
              the world. Combining high-quality education with a unique cultural
              experience, living in Germany is the main reason why young people
              from all around the world choose to study there. If that sounds
              interesting to you, join more than four-hundred thousand other
              students for the adventure of a lifetime in Germany! Generally,
              you can study in Germany for free.. But there are a few exceptions
              in which you have to pay tuition fees-
              <ul>
                <li>Only public universities are tuition-free.</li>
                <li>
                  Some federal states also expect tuition fees of 500 to 650 EUR
                  per semester if you want to pursue a “secondary degree”
                  (“Zweitstudium”).
                </li>
                <li>
                  Non-consecutive study programs usually cost tuition fees.
                </li>
                <li>
                  Public universities in the state of Baden-Württemberg can
                  charge tuition fees from non-EU/EEA students.
                </li>
              </ul>
              International graduates of German universities can stay in Germany
              while they look for a job. And that applies to all students,
              regardless of the country of origin. If you are a citizen from
              outside the European Union, you can apply for an 18-month
              residence permit for after graduation.
            </p>
          </div>
          <div>
            <h1>STUDY IN ITALY</h1>
            <p>
              These and many other universities in Italy are stepping up efforts
              to accelerate their internationalization and offer degree programs
              specifically for international students. There are currently more
              than 500 English-taught study programs available in the country.
              And every year, there are more and more options to study in Italy
              in English. Italy is a budget-friendly study destination in
              Europe. While the cost of accommodation and living can be high in
              large cities like Rome or Milan, smaller cities are much cheaper.
              Larger universities usually offer support in finding
              accommodation; with luck you might get a place in a cheap student
              home. Compared to other countries in Europe, Italy’s public
              universities are also relatively cheap. On average, public
              universities in Italy charge around 1,000 EUR per year. Top-ranked
              prestigious universities might charge more. A special case is the
              University of Rome Tor Vergata, where tuition fees are tied to
              your family’s financial situation: Based on the income, you are
              charged from a low minimum around 150 EUR to a maximum of around
              5,000 EUR per year. Italians are known to be welcoming, open
              people. You will make local friends quickly. And they will teach
              you that eating out and enjoying high-quality, healthy food are
              fundamental to la dolce vita (“the sweet life”) for every Italian.
              Although you will get by with only a handful of words and phrases
              in Italian, English is not widely spoken outside the academic
              context, and you will definitely benefit from taking some lessons
              in Italian before and during your stay. That is especially true if
              you should decide to stay and work in Italy after graduation.
              Cultural activities include everything from traditional local
              festivals to major international sporting events. Italian night
              life is always lively, especially in cities. In summer, the
              majority of people head for the sea or countryside. For quality of
              life, unforgettable, charming Italy provides value for any
              student.
            </p>
          </div>
        </div>
        {/** block 6 */}

        <div className="EUR-block6">
          <div className="col1block6">
            {" "}
            <h1> Basic Pre Requisites for All Courses</h1>
            <ul>
              <li> Application Form</li>
              <li>
                Competitive Exam Scores - You might also be asked to take GRE/
                GMAT exams
              </li>
              <li>
                Academic Certificates - You need to send the academic
                certificates in support of your educational qualifications. The
                Academic Certificates according to the applied course
              </li>
              <li>Statement of Purpose </li>
              <li>Letter of Recommendation </li>
              <li>
                Work Experience Certificates - If you are applying for any
                Business Program you must have experience in the relevant field
                to get admission to any Business School in Europe.{" "}
              </li>
              <li>Resume</li>
              <li>Passport size Photographs</li>
              <li></li>
            </ul>
          </div>
          <div className="col2block6">
            <b>
              After receiving your admission application, the university will
              verify the documents or profile and will send you the admission.
              Once you have received the acceptance letter you can apply for the
              Student Visa with the required documents. To apply for a student
              visa, you will require the following documents:
            </b>
            <ul>
              <li>Entry visa application form</li>
              <li>Letter of acceptance from the European university </li>
              <li>Recent passport size photographs</li>
              <li>Valid travel documents</li>
              <li>Proof of accommodation in Europe</li>
              <li>
                Proof that the student has enough financial support to survive
                during your studies in Europe
              </li>
              <li>Paid health insurance</li>
              <li>Copy of all previous educational certificates</li>
              <li>Receipt of the visa application fees</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EUR;
