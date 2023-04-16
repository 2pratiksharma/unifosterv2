import React from "react";
import Hero from "../../components/hero/Hero";
import Disc from "../../components/serviceDescription/Disc";
import Why from "../../components/Why us/Why";
import Nav from "../../components/Nav/Nav";
import Test from "../../components/test/Test";
import StudyDetails from "../../components/studydetails/StudyDetails";
import Quote from "../../components/qoute/Quote";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <Test />
      <Disc />
      <Why />
      <Quote />
      <StudyDetails />
      <Footer />
    </div>
  );
};

export default Home;
