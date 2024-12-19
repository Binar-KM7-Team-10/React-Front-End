import React from "react";
import Banner from "../../../assets/Images/imgbanner.png";
import FlightSearchForm from "../FlightSearch/FlightSearchForm";

const Hero = () => {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="absolute inset-x-0 h-[60px] sm:h-[130px] md:h-[150px] top-20 md:top-40 -translate-y-1/2">
        <div className="absolute -left-[calc((100vw-100%)/2)] right-[calc((-100vw+100%)/2)] h-full bg-gradient-to-r from-purple-600 to-purple-300" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="relative mx-auto w-[90%] h-[130px] z-10 pt-8 md:h-[280px] md:w-full">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-full rounded-t-lg"
            style={{ zIndex: 2 }}
          />
        </div>
        <FlightSearchForm />
      </div>
    </div>
  );
};

export default Hero;
