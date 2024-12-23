import React from "react";
import DynamicBanner from "../components/fragments/Banner/DynamicBanner";
import FormNewResetPassword from "../components/fragments/AuthForm/FormNewResetPassword";
import FlightForgotPasswordBanner from "../assets/Images/Flight-Banner.png";

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-screen flex-row lg:flex-row">
      <DynamicBanner imageSrc={FlightForgotPasswordBanner} />
      <div className="flex w-full lg:w-1/2 flex-col justify-center p-4 lg:p-8">
        <div className="mx-auto w-full max-w-md">
          <FormNewResetPassword />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
