import React, { useState } from "react";
import { Link } from "react-router-dom";
import DynamicBanner from "../components/fragments/Banner/DynamicBanner";
import FormLogin from "../components/fragments/AuthForm/FormLogin";
import FlightLoginBanner from "../assets/Images/Flight-Banner.png";

const LoginPage = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <DynamicBanner imageSrc={FlightLoginBanner} className="w-full lg:w-1/2" />

      <div className="flex w-full lg:w-1/2 flex-col justify-center p-4 lg:p-8 items-center mt-16 md:mt-20">
        <div className="mx-auto w-full max-w-sm sm:max-w-md">
          <h1 className="text-start px-2 sm:px-4 text-2xl sm:text-3xl font-bold text-black">
            Masuk
          </h1>
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
