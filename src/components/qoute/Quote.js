import React from "react";
import { QuoteText, QuoteTitle } from "../../assets/data";
import "./quote.scss";

const Quote = () => {
  return (
    <div className="quoteContainer">
      <div className="quoteTitle">
        <h4>{QuoteTitle}</h4>
        <p>{QuoteText}</p>
      </div>
    </div>
  );
};

export default Quote;
