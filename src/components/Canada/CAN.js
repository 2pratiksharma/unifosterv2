import React from "react";
import "./CAN.scss";
import CANImg from "../../assets/wallCAN.jpg";
import img from "../../assets/imgCan.jpg";
import img2 from "../../assets/imgCan2.jpg";
import NavBar from "../Nav/Nav";
import ScrollBtn from "../button/ScrollBtn";
import Footer from "../Footer/Footer";

const CAN = () => {
  return (
    <>
      <NavBar />
      <ScrollBtn />
      <div className="CANBG-container">
        <img src={CANImg} />
        <div className="CANBG-text">
          <h1>Study In Canada</h1>
        </div>
      </div>

      {/** block 1 */}
      <div className="CAN-main-container">
        <div className="CAN-title1">
          <h2>
            Study In <b>Canada</b>{" "}
          </h2>
        </div>
        <div className="CAN-text1">
          <p>
            Canada is a very open and aspiring destination for the international
            students. It is one of the top most welcoming and multicultural
            country for international student with vast education and settlement
            opportunity. Canada is known to offer high-quality education at
            affordable tuition fees with globally recognized degrees. it is no
            surprise that Canada is one of the premiere destinations for
            international students, drawing in over 300,000 new international
            students annually.
          </p>
        </div>

        {/** block 2 */}

        <div className="CAN-block2">
          <div className="CAN-block2-colum1">
            <h1>Reasonable expenses</h1>
            <p>
              Tuition fees for colleges, universities and vocational schools
              vary depending on the program and school you choose. College
              programs vary in length. Some programs may only take a few months
              or others a few years. Typically, tuition can range from
              approximately $7,000 to $22,000 per year. On average in Canada,
              university tuition costs around ($36,100 per year) for
              international undergraduate students and ($21,100 per year) for
              international graduate students. Many college programs also
              include a work placement or apprenticeship, so you may earn an
              income while you study. On average, living costs are around
              $15,000 per year for college students.
            </p>
          </div>
          <div className="CAN-block2-column2">
            <h1>Multicultural Society & Campus Lifestyle</h1>
            <p>
              Canada is known as a picturesque nation of cultural diversity,
              friendly people, and tolerant attitudes towards foreigners. Being
              an international student in Canada comes with a number of
              benefits, from the countless on-campus programs for integrating
              students, down to the immigration programs designed to help
              facilitate permanent residency applications, Canada’s reputation
              for educational excellence cannot be denied. As an international
              student, your social life begins at your accommodation. Canada
              welcomes all its international students with open arms and you are
              sure to find an accommodation of your choice in this country even
              if you don’t know anyone beforehand. There are many options like
              Dormitories or Condominiums, Shared Apartments (off-campus) and
              homestay.
            </p>
          </div>
        </div>

        <div className="CAN-block3">
          <div className="CAN-block3-title">
            <h1>Research Opportunities</h1>
            <p>
              Research is one of the most wanted requirements of post-secondary
              education. Students are encouraged to think different. Canada
              spends a lot of resources required by global students in the form
              of ELP and FLP, support services, workshops and training for
              academic and personal advancement One has ample opportunities to
              do research in any field. The industries and government
              institutions (The National Research Council (NRC)) are open to
              support research based on medicine, agriculture,
              telecommunication, computer science and environmental science.
            </p>
          </div>
          <div className="CAN-block3-img">
            <img src={img} />
          </div>
        </div>

        <div className="CAN-block4">
          <div className="CAN-block4-img">
            <img src={img2} />
          </div>
          <div className="CAN-block4-title">
            <h1>Internationally recognized & Career Prospects</h1>
            <p>
              Canada ranks in third place globally for the best quality of life,
              you’ll find a high standard of living in Canada. International
              students benefit from the same rights and freedoms that protect
              all Canadians, respect for human rights, equality, diversity and a
              stable, peaceful society. Get an excellent return on your
              investment when you use your internationally recognized Canadian
              qualifications to build your career. Whether you decide to stay in
              Canada or return to your home country, your Canadian education and
              network will help prepare you for the future.
            </p>
          </div>
        </div>
        <div className="CAN-block5">
          <h1>Basic Pre Requisites For All Courses</h1>
          <ul>
            <ul>
              <li>A letter of explanation/personal statement</li>
              <li>
                Proof that you can financially support yourself and any
                dependents you plan to bring with you to Canada
              </li>
              <li>Official academic transcripts</li>

              <li> English language proficiency tests like IELTS, or TOEFL.</li>
              <li>
                {" "}
                A study permit if the course or program is longer than 6 months.
              </li>
              <li>Personal statement or (statement of purpose)</li>
              <li> Letters of recommendation</li>
            </ul>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CAN;
