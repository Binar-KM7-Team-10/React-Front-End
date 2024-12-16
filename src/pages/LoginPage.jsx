import React, { useState } from "react";
import { Link } from "react-router-dom";
import DynamicBanner from "../components/fragments/Banner/DynamicBanner";
import FormLogin from "../components/fragments/AuthForm/FormLogin";
import FlightLoginBanner from "../assets/Images/Flight-Banner.png";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-row lg:flex-row">
      <DynamicBanner
        imageSrc={FlightLoginBanner}
      />

      <div className="flex w-full lg:w-1/2 flex-coljustify-center p-4 lg:p-8 items-center">
        <div className="mx-auto w-full max-w-md">
          <h1 className="text-start px-4 text-3xl font-bold text-black sm:text-4xl">
            Masuk
          </h1>
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
