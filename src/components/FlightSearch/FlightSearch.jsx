import React, { useState } from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";

import Filter from "../Filter/Filter";
import ListPenerbangan from "./ListPenerbangan";
import LoadingSearchFlight from "./LoadingSearchFlight";

import not_found_img from "../../assets/Images/tiket_not_found.png";
import empty_img from "../../assets/Images/tiket_habis.png";
import { ArrowUpDown } from "lucide-react";

const FlightSearch = () => {
  const days = ["Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu", "Senin"];
  const initialDate = new Date("2023-03-01");

  const generateDates = (startDate, numDays) => {
    const dates = [];
    for (let i = 0; i < numDays; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const dates = generateDates(initialDate, days.length);

  const [flights, setFlights] = useState([
    {
      id: 1,
      airline: "Jet Air",
      time: "07:00",
      duration: "4h 0m",
      price: 4950000,
    },
    {
      id: 2,
      airline: "Jet Air",
      time: "08:00",
      duration: "4h 0m",
      price: 5950000,
    },
    {
      id: 3,
      airline: "Jet Air",
      time: "13:15",
      duration: "4h 0m",
      price: 7225000,
    },
    {
      id: 4,
      airline: "Jet Air",
      time: "20:15",
      duration: "3h 15m",
      price: 8010000,
    },
  ]);

  const [selectedDay, setSelectedDay] = useState("Rabu");
  const [selectedOption, setSelectedOption] = useState("Termurah");
  const [selectedTempOption, setSelectedTempOption] = useState("Termurah");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const options = [
    "Harga - Termurah",
    "Durasi - Terpendek",
    "Keberangkatan - Paling Awal",
    "Keberangkatan - Paling Akhir",
    "Kedatangan - Paling Awal",
    "Kedatangan - Paling Akhir",
  ];

  const sortFlights = (flights, option) => {
    let sortedFlights = [...flights];
    if (option === "Harga - Termurah") {
      return sortedFlights.sort((a, b) => a.price - b.price);
    } else if (option === "Harga - Termahal") {
      return sortedFlights.sort((a, b) => b.price - a.price);
    }
    return sortedFlights;
  };

  const handleSort = (option) => {
    setSelectedTempOption(option);
    let sortedFlights = sortFlights(flights, option);
  };

  const handleConfirmSelection = () => {
    setSelectedOption(selectedTempOption);
    let sortedFlights = sortFlights(flights, selectedTempOption);
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto p-4 rounded-md">
        <h2 className="text-xl font-semibold text-gray-800">
          Pilih Penerbangan
        </h2>
        <div className="flex gap-3 items-center justify-between mt-4 w-full">
          <div className="flex items-center space-x-2 bg-purple-500 text-white py-3 px-4 rounded-md w-9/12">
            <FiArrowLeft size={20} />
            <span className="text-base">
              JKT &gt; MLB - 2 Penumpang - Economy
            </span>
          </div>
          <div className="w-3/12">
            <button className="bg-success text-base font-bold text-white px-4 py-3 rounded-md w-full">
              Ubah Pencarian
            </button>
          </div>
        </div>
        <div className="flex mt-4 justify-between">
          {days.map((day, index) => (
            <React.Fragment key={index}>
              <button
                className={`flex flex-col items-center justify-center py-2 px-5 rounded-md hover:bg-purple-700 hover:text-white ${
                  day === selectedDay
                    ? "bg-purple-500 text-white"
                    : "bg-white text-gray-800"
                }`}
                onClick={() => setSelectedDay(day)}
              >
                <span className="font-semibold text-sm">{day}</span>
                <span className="text-xs">
                  {dates[index].toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </button>
              <div>
                {index < days.length - 1 && (
                  <div className="relative right-0 top-1/2 h-6 border-r border-grey-300 transform -translate-y-1/2"></div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Filter Urutkan */}
      <div className="mx-auto md:mx-64 flex justify-end items-center mt-6">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="px-4 py-2 rounded-full bg-white border-2 border-[#A06ECE] text-[#A06ECE] flex gap-2"
        >
          <ArrowUpDown />

          {selectedOption.split(" - ")[1]}
        </button>
      </div>

      {/* Filter Urutkan Popup */}
      {isFilterOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <div className="flex justify-end items-center">
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500"
              >
                <FaTimes size={16} />
              </button>
            </div>
            <ul className="py-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleSort(option)}
                  className={`py-2 px-4 cursor-pointer rounded-md border-b border-gray-300 pb-2 ${
                    selectedTempOption === option
                      ? "bg-[#4B1979] text-white font-bold"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-[14px]">{option}</span>
                      {selectedTempOption === option}
                    </div>
                    {selectedTempOption === option && (
                      <div className="flex items-center justify-center w-4 h-4 bg-[#73CA5C] rounded-full">
                        <FaCheck className="text-white w-2.5 h-2.5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </ul>
            <div className="flex justify-end w-full">
              <button
                onClick={handleConfirmSelection}
                className="w-full max-w-[150px] bg-purple-800 text-white py-2 rounded-[12px] font-semibold"
              >
                Pilih
              </button>
            </div>
          </div>
        </div>
      )}

      {flights.length === 0 ? (
        <div className="flex justify-center w-full my-20">
          <div>
            <img src={empty_img} className="" alt="" />
            <p className="text-sm text-center mt-10">
              Maaf, Tiket terjual habis!
            </p>
            <p className="text-sm text-center text-purple-800">
              Coba cari perjalanan lainnya!
            </p>
          </div>
        </div>
      ) : (
        <div className="flex mt-6 max-w-5xl mx-auto space-x-4">
          <div className="w-1/4">
            <Filter />
          </div>
          <div className="flex-1 bg-white p-6 rounded-md">
            <ul className="space-y-4">
              <ListPenerbangan flights={flights} />
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
