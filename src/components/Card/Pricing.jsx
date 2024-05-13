import React from "react";
import NotAvailable from "./NotAvailable";

const Pricing = ({ price }) => {
  return (
    <>
      {price && <h1 className="font-bold text-2xl   ">From ₹{price}</h1>}
      {!price && <NotAvailable />}
    </>
  );
};

export default Pricing;
