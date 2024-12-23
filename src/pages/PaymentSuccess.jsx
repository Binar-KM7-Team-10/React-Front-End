import React from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import AlertCheckout from "../components/elements/Alert/AlertCheckout";
import PaymentComplete from "../components/fragments/PaymentSection/PaymentComplete";

const PaymentSuccess = () => {
  const active = {
    text1: true,
    text2: true,
    text3: true,
  };

  return (
    <div>
      <Navbar search={true} type={"auth"} />
      <div className="shadow-md py-10">
        <div className="mx-4 sm:mx-8 lg:mx-20 xl:mx-40 2xl:mx-60 px-4 sm:px-8 lg:px-20 xl:px-40 2xl:px-60">
          <AlertCheckout text={"Terimakasih atas pembayaran transaksi"} type={"success"} />
        </div>
      </div>
      <PaymentComplete />
    </div>
  );
};

export default PaymentSuccess;
