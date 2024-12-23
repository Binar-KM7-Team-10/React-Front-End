import React, { useState } from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import PaymentHeader from "../components/fragments/PaymentSection/PaymentHeader";
import PaymentForm from "../components/fragments/PaymentSection/PaymentForm";

const Payment = () => {
  const active = {
    text1: true,
    text2: true,
    text3: false,
  };

  const [isAvailable, setisAvailable] = useState(true);

  return (
    <div>
      <Navbar search={true} type={"auth"} />
      <PaymentHeader
        inputText="Selesaikan Pembayaran sampai 10 Maret 2023 12:00"
        alertType="danger"
        activeStep={active}
        setisAvailable={setisAvailable}
      />
      {
        isAvailable && <PaymentForm />
      }
    </div>
  );
};

export default Payment;
