import React from "react";
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

      <div className="flex w-full lg:w-1/2 flex-col justify-center p-4 lg:p-8">
        <div className="mx-auto w-full max-w-md">
          <h1 className="text-start px-4 text-3xl font-bold text-black sm:text-4xl">
            Masuk
          </h1>
          <p className="mx-auto mt-4 text-center w-3/4 lg:w-full text-black">
            Hello, welcome back. Please enter your details.
          </p>

          <FormLogin />

          <p className="mt-6 text-center text-sm text-slate-600">
            Belum Punya Akun?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#7126B5]"
            >
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
