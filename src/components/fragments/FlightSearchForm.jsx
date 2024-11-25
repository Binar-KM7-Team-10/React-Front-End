import React, { useState } from "react";
import {
  PlaneTakeoff,
  PlaneLanding,
  Calendar1,
  RockingChair,
} from "lucide-react";
import logoreturn from "../../assets/Images/return.svg";

const FlightSearchForm = () => {
  const [isRoundTrip, setIsRoundTrip] = useState(true);

  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-xl p-6 mx-4 -mt-20 relative z-10 w-full max-w-[968px] space-y-6">
        <h1 className="text-center sm:text-left text-xl sm:text-xl lg:text-xl font-bold">
          Pilih Jadwal Penerbangan spesial di{" "}
          <span className="text-purple-600">Tiketku!</span>
        </h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-24 relative">
          <div className="flex flex-wrap items-center md:items-start gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <PlaneTakeoff className="text-gray-400" size={20} />
              <span className="text-sm text-gray-500">From</span>
            </div>
            <div className="border-b-[1.5px] border-gray-300 pb-2 w-full md:max-w-[300px]">
              <p className="font-medium text-base sm:text-lg">Jakarta (JKTA)</p>
            </div>
          </div>

          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <img src={logoreturn} alt="Return Icon" />
          </div>

          <div className="flex flex-wrap items-center md:items-start gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <PlaneLanding className="text-gray-400" size={20} />
              <span className="text-sm  text-gray-500">To</span>
            </div>
            <div className="border-b-[1.5px] border-gray-300 pb-2 w-full md:max-w-[300px]">
              <p className="font-medium text-base sm:text-lg">
                Melbourne (MLB)
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-24">
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <Calendar1 className="text-gray-400" size={20} />
              <span className="text-sm text-gray-500">Date</span>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="space-y-1">
                <span className="text-sm sm:text-base text-[#8A8A8A]">
                  Departure
                </span>
                <p className="border-b-[1.5px] w-auto max-w-[140px] border-gray-300 pb-2 font-medium text-base">
                  1 Maret 2023
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[#8A8A8A] text-md">Return</span>
                <p className="border-b-[1.5px] w-[140px] border-[#D0D0D0] pb-3 font-medium text-sm text-[#7126B5]">
                  Pilih Tanggal
                </p>
              </div>
              <div className="h-6">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    checked={isRoundTrip}
                    onChange={() => setIsRoundTrip(!isRoundTrip)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#7126B5]"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <RockingChair className="text-gray-400" size={20} />
              <span className="text-sm  text-gray-500">To</span>
            </div>
            <div className="flex gap-4 flex-wrap">
              <div className="space-y-1">
                <span className="text-sm sm:text-base text-[#8A8A8A]">
                  Passengers
                </span>
                <p className="border-b-[1.5px] border-gray-300 pb-2 font-medium text-base">
                  2 Penumpang
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-sm sm:text-base text-[#8A8A8A]">
                  Seat Class
                </span>
                <p className="border-b-[1.5px] w-[140px] border-gray-300 pb-2 font-medium text-base">
                  Business
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold text-sm sm:text-base hover:bg-purple-700 transition">
          Cari Penerbangan
        </button>
      </div>
    </div>
  );
};

export default FlightSearchForm;
