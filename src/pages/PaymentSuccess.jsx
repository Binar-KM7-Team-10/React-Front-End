import React from "react";
import NavbarAuthentication from "../components/fragments/Navbar/NavbarAuthentication";
import PaymentHeader from "../components/fragments/PaymentSection/PaymentHeader";
import PaymentComplete from "../components/fragments/PaymentSection/PaymentComplete";

const PaymentSuccess = () => {
  const active = {
    text1: true,
    text2: true,
    text3: true,
  };

  return (
    <div>
      <NavbarAuthentication />
      <PaymentHeader
        inputText="Terimakasih atas pembayaran transaksi"
        alertType="success"
        activeStep={active}
      />
      <PaymentComplete />
    </div>
  );
};

export default PaymentSuccess;
