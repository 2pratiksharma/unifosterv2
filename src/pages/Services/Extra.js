import React from "react";
import styles from "./extra.module.scss";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";

const Extra = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer1}>
        <h2>
          {" "}
          <img src={icon1} alt="Icon 1" />
          SOP SERVICES
        </h2>
        <p>
          Our expert SOP consultants can piece together your experiences,
          aptitudes, motivations, goals and personal interests to make the
          perfect statement of purpose. Our best SOP writing services assure
          professionalism and quality, in all aspects. Secure your seat in your
          dream university.
        </p>
      </div>
      <div className={styles.innerContainer2}>
        <h2>
          {" "}
          <img src={icon2} alt="Icon 2" />
          DOV/HRD SERVICES
        </h2>
        <p>
          HRD attestation for Italy is required mainly for educational
          documents. Individuals started seeking opportunities internationally
          to get better education and employment. Authentication of documents is
          required for international matters. HRD attestation for Italy is an
          important step attestation services especially in educational
          certificate attestation.
        </p>
        <ul>
          The purposes of HRD attestation for Italy is-
          <li>To attain higher education foreign countries.</li>
          <li> For migration purposes.</li>
          <li> To obtain work permit abroad.</li>
          <li> For visa purposes.</li>
        </ul>
        <p>
          The Declaration of value for Italy is a document which provides value
          of your education in the Italy as per their -education standard. This
          is awarded to a specific person by an institution belonging to an
          educational system other than the Italian one. We provide you all the
          facilities according to your requirement.{" "}
        </p>
      </div>
      <div className={styles.innerContainer3}>
        <h2>
          {" "}
          <img src={icon3} alt="Icon 3" />
          CIMEA SERVICES
        </h2>
        <p>
          Upon candidates request CIMEA will issue the Statement of
          comparability and the Statement of verification referring to
          qualifications obtained abroad. CIMEA’s statements might be submitted
          to the international student’s admission unit at Università degli
          studi di in order to complete the enrollment process. . We provide you
          all the facilities according to your requirement.
        </p>
      </div>
    </div>
  );
};

export default Extra;
