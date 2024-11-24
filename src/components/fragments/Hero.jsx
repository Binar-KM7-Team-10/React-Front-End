import React, { useState } from "react";
import image from "../../assets/Images/imgbanner.png";
import RectangleRight from "../../assets/Images/RectangleRight.png";
import RectangleLeft from "../../assets/Images/RectangleLeft.png";
import FlightSearchForm from "./FlightSearchForm";

const Hero = () => {
  return (
    <div className="md:px-8 py-5">
      <div className="relative w-full max-w-6xl mx-auto">
        <img
          src={RectangleLeft}
          alt="Rectangle Left"
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 w-[236px] h-[150px] hidden lg:block"
          style={{ zIndex: 1 }}
        />

        <img
          src={RectangleRight}
          alt="Rectangle Right"
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 w-[236px] h-[150px] hidden lg:block"
          style={{ zIndex: 1 }}
        />

        <div className="relative h-[300px] z-10 pt-4">
          <img
            src={image}
            alt="Banner"
            className="w-full h-full rounded-t-lg"
            style={{ zIndex: 2 }}
          />
        </div>
      </div>
      <FlightSearchForm/>
    </div>
  );
};

export default Hero;
