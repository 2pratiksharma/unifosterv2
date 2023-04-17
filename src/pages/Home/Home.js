import React from "react";
import Hero from "../../components/hero/Hero";
import Disc from "../../components/serviceDescription/Disc";
import Why from "../../components/Why us/Why";

import Test from "../../components/test/Test";
import StudyDetails from "../../components/studydetails/StudyDetails";
import Quote from "../../components/qoute/Quote";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Nav/Nav";
import Logoanim from "../../components/Nav/Logoanim";
import Quotenew from "../../components/qoute/Quotenew";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Logoanim />
      <Test />
      <Disc />
      <Why />
      <Quote />
      <StudyDetails />
      <Quotenew />
      <Footer />
    </div>
  );
};

export default Home;
