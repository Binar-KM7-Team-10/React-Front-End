import React from "react";
import PaymentBreadcrumb from "../Breadcrumbs/PaymentBreadCrumbs";
import AlertCheckout from "../alert/AlertCheckout.jsx";

const PaymentHeader = ({ inputText, alertType, activeStep }) => {
  return (
    <div className="shadow-md py-10">
      <PaymentBreadcrumb
        text1={"Isi Data Diri"}
        text2={"Bayar"}
        text3={"Selesai"}
        active={activeStep}
      />
      <div className="mx-60 px-60">
        <AlertCheckout text={inputText} type={alertType} />
      </div>
    </div>
  );
};

export default PaymentHeader;
