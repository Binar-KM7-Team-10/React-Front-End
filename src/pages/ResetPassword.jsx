import React from "react";
import DynamicBanner from "../components/fragments/Banner/DynamicBanner";
import FormResetPassword from "../components/fragments/AuthForm/FormResetPassword";
import FlightResetPasswordBanner from "../assets/Images/Flight-Banner.png";

const ResetPasswordPage = () => {
  return (
    <div className="flex min-h-screen flex-row lg:flex-row">
      <DynamicBanner imageSrc={FlightResetPasswordBanner} />
      <div className="flex w-full lg:w-1/2 flex-col justify-center p-4 lg:p-8">
        <div className="mx-auto w-full max-w-md">
          <FormResetPassword />
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
