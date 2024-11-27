import React from "react";
import { Link } from "react-router-dom";
import DynamicBanner from "../components/Banner/DynamicBanner";
import FlightLoginBanner from "../assets/Images/Flight-Banner.png";
import FormRegister from "../components/fragments/FormRegister";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen flex-row lg:flex-row">
      <DynamicBanner
        imageSrc={FlightLoginBanner}
        // title="Explore the Roads with Ease"
        // description="Drive your dream car today! Affordable, flexible, and comfortable."
      />

      <div className="flex w-full lg:w-1/2 flex-col justify-center p-4 lg:p-8">
        <div className="mx-auto w-full max-w-md">
          <h1 className="text-center text-3xl font-bold text-black sm:text-4xl">
            Daftar
          </h1>
          <p className="mx-auto mt-4 text-center text-black">
            Hello, welcome back. Please enter your details.
          </p>

          <FormRegister />

          <p className="mt-6 text-center text-slate-600">
            Sudah punya akun?{" "}
            <Link
              to="/register"
              className="font-semibold text-[#7126B5]"
            >
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
