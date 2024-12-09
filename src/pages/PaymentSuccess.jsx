import React from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import PaymentHeader from "../components/fragments/PaymentSection/PaymentHeader";

const PaymentSuccess = () => {
  const active = {
    text1: true,
    text2: true,
    text3: true,
  };

  return (
    <div>
      <Navbar search={true} type={"auth"} />
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
