import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const FlightSearchHeader = ({
  days,
  selectedDay,
  setSelectedDay,
  dates,
}) => {
  return (
    <div className="max-w-5xl mx-auto p-4 bg-white border-b-2 pb-8">
      <h2 className="text-lg md:text-xl font-semibold text-gray-800">
        Pilih Penerbangan
      </h2>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between mt-4 w-full">
        <div className="flex items-center space-x-2 bg-purple-500 hover:bg-[#7126B5] text-white py-2 md:py-3 px-4 rounded-[12px] w-full md:w-9/12 gap-4">
          <FiArrowLeft size={20} />
          <span className="text-[16px] md:text-base">
            JKT &gt; MLB - 2 Penumpang - Economy
          </span>
        </div>
        <div className="w-full md:w-3/12">
          <button className="bg-success text-[16px] md:text-base font-bold text-white px-4 py-2 md:py-3 rounded-[12px] w-full">
            Ubah Pencarian
          </button>
        </div>
      </div>

      <div className="mt-4 w-full overflow-x-auto flex gap-4">
        {days.map((day, index) => (
          <button
            key={index}
            className={`flex flex-col items-center justify-center py-2 px-2 md:px-5 rounded-md text-xs md:text-sm hover:bg-purple-700 hover:text-white ${
              day === selectedDay
                ? "bg-purple-500 text-white"
                : "bg-white text-gray-800"
            }`}
            onClick={() => setSelectedDay(day)}
          >
            <span className="font-semibold">{day}</span>
            <span className="text-[12px] md:text-xs mt-1 hover:text-white">
              {dates[index].toLocaleDateString("id-ID", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              })}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FlightSearchHeader;
