import React from "react";
import NavbarAuthentication from "../components/fragments/NavbarAuthentication";
import PaymentHeader from "../components/fragments/PaymentHeader";
import PaymentComplete from "../components/fragments/PaymentComplete";

const PaymentSuccess = () => {
  const active = {
    text1: true,
    text2: true,
    text3: true,
  };

  return (
    <div>
      <NavbarAuthentication />
      <PaymentHeader inputText="oi" alertType="success" activeStep={active} />
      <PaymentComplete />
    </div>
  );
};

export default PaymentSuccess;
