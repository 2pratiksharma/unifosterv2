import React from "react";
import img1 from "../../assets/whyimg.jpg";
import img2 from "../../assets/whyimg2.jpg";
import "./details.scss";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import {
  StudyAusBenefits,
  StudyCanBenefits,
  StudyEurBenefits,
  StudyUkBenefits,
  StudyUsaBenefits,
} from "../../assets/data";
import Footer from "../Footer/Footer";

const StudyDetails = () => {
  return (
    <>
      <div className="studycontainer">
        <div className="studyIntrotitle">
          <h2>
            Confused where to <b>Study?</b>
          </h2>
          <p>
            {" "}
            We are here to <b>Guide!</b>{" "}
          </p>
        </div>
        <div className="accord-container">
          <div className="accord">
            <Accordion allowToggle>
              <AccordionItem>
                <AccordionButton>
                  <div textAlign="left">Study in USA </div>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="usapanel" pb={4}>
                  {StudyUsaBenefits}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <div textAlign="left">Study in UK</div>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="ukpanel" pb={4}>
                  {StudyUkBenefits}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <div textAlign="left">Study in Canada </div>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="canpanel" pb={4}>
                  {StudyCanBenefits}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <div textAlign="left">Study in Australia </div>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="auspanel" pb={4}>
                  {StudyAusBenefits}
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <div textAlign="left">Study in Europe </div>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="eurpanel" pb={4}>
                  {StudyEurBenefits}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="studyimg">
            <img src={img1} />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyDetails;
