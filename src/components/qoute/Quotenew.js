import React from "react";
import { QuoteTextNew, QuoteTitleNew } from "../../assets/data";
import "./quote.scss";
const Quotenew = () => {
  return (
    <div className="quoteContainer">
      <div className="quoteTitle">
        <h4>{QuoteTitleNew}</h4>
        <p>{QuoteTextNew}</p>
      </div>
    </div>
  );
};

export default Quotenew;
