import React from "react";
import PaymentBreadcrumb from "../elements/Breadcrumbs/PaymentBreadCrumbs.jsx";
import AlertCheckout from "../alert/AlertCheckout.jsx";

const PaymentHeader = ({ inputText, alertType, activeStep }) => {
  return (
    <div className="shadow-md py-10 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <PaymentBreadcrumb
          text1={"Isi Data Diri"}
          text2={"Bayar"}
          text3={"Selesai"}
          active={activeStep}
        />
        <AlertCheckout text={inputText} type={alertType} />
      </div>
    </div>
  );
};

export default PaymentHeader;
