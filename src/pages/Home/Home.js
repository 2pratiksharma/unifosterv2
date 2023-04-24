import React, { useEffect } from "react";

import Disc from "../../components/serviceDescription/Disc";
import Why from "../../components/Why us/Why";

import Test from "../../components/test/Test";
import StudyDetails from "../../components/studydetails/StudyDetails";
import Quote from "../../components/qoute/Quote";
import Footer from "../../components/Footer/Footer";
import NavBar from "../../components/Nav/Nav";
import Logoanim from "../../components/Nav/Logoanim";
import Quotenew from "../../components/qoute/Quotenew";
import WelcomePop from "../../components/popups/WelcomePop";
import ScrollBtn from "../../components/button/ScrollBtn";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <NavBar />

      <Test />
      <WelcomePop />
      <Disc />
      <Why />
      <Quote />
      <StudyDetails />
      <Quotenew />
      <Footer />
      <ScrollBtn />
    </div>
  );
};

export default Home;
