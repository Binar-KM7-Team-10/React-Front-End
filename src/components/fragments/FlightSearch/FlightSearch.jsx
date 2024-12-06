import React, { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import Filter from "../Filter/Filter";
import ListPenerbangan from "./ListPenerbangan";
import empty_img from "../../../assets/Images/tiket_habis.png";
import FlightSearchHeader from "./FlightSearchHeader"; // Import the header component

const FlightSearch = () => {
  const days = ["Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu", "Senin", "Selasa"];
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
      class: "Economy",
      departuretime: "07:00",
      citydeparture: "JKT",
      duration: "4h 0m",
      status: "Direct",
      arrivaltime: "11:00",
      cityarrival: "MLB",
      price: 4950000,
    },
    {
      id: 2,
      airline: "Jet Air",
      class: "Economy",
      departuretime: "08:00",
      citydeparture: "JKT",
      duration: "4h 0m",
      status: "Direct",
      arrivaltime: "12:00",
      cityarrival: "MLB",
      price: 5950000,
    },
    {
      id: 3,
      airline: "Jet Air",
      class: "Economy",
      departuretime: "13:15",
      citydeparture: "JKT",
      duration: "4h 0m",
      status: "Direct",
      arrivaltime: "17:15",
      cityarrival: "MLB",
      time: "13:15",
      duration: "4h 0m",
      price: 7225000,
    },
    {
      id: 4,
      airline: "Jet Air",
      class: "Economy",
      departuretime: "20:15",
      citydeparture: "JKT",
      duration: "3h 15m",
      status: "Direct",
      arrivaltime: "23:30",
      cityarrival: "MLB",
      time: "20:15",
      duration: "3h 15m",
      price: 8010000,
    },
  ]);

  const [selectedDay, setSelectedDay] = useState("Rabu");
  const [selectedOption, setSelectedOption] = useState("Termurah");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const options = [
    "Harga - Termurah",
    "Durasi - Terpendek",
    "Keberangkatan - Paling Awal",
    "Keberangkatan - Paling Akhir",
    "Kedatangan - Paling Awal",
    "Kedatangan - Paling Akhir",
  ];

  const handleSort = (option) => {
    setSelectedOption(option);

    let sortedFlights = [...flights];
    if (option === "Harga - Termurah") {
      sortedFlights.sort((a, b) => a.price - b.price);
    } else if (option === "Harga - Termahal") {
      sortedFlights.sort((a, b) => b.price - a.price);
    }

    setFlights(sortedFlights);
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
      {/* Use the new header component here */}
      <FlightSearchHeader
        days={days}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
        dates={dates}
      />

      <div className="mx-auto md:mx-36 flex justify-end items-center mt-6">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="px-4 py-2 rounded-full bg-white border-2 border-[#A06ECE] text-[#7126B5] flex gap-2 text-xs md:text-sm"
        >
          <ArrowUpDown />
          {selectedOption}
        </button>
      </div>

      {isFilterOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 w-full md:w-96">
            <div className="flex justify-between items-center pb-4 border-b">
              <span className="text-purple-800 font-bold text-sm md:text-lg">
                {selectedOption}
              </span>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-gray-500"
              >
                <FaTimes size={16} />
              </button>
            </div>
            <ul className="py-4">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSort(option)}
                  className={`flex justify-between items-center py-2 px-4 cursor-pointer hover:bg-gray-100 text-xs md:text-sm ${
                    selectedOption === option ? "font-bold text-purple-800" : ""
                  }`}
                >
                  <span>{option}</span>
                  {selectedOption === option && (
                    <FaCheck className="text-purple-800" />
                  )}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="w-full bg-purple-800 text-white py-2 text-xs md:text-sm rounded-md font-semibold"
            >
              Pilih
            </button>
          </div>
        </div>
      )}

      {flights.length === 0 ? (
        <div className="flex justify-center w-full my-10 md:my-20">
          <div>
            <img src={empty_img} className="w-32 md:w-48" alt="" />
            <p className="text-xs md:text-sm text-center mt-4 md:mt-10">
              Maaf, Tiket terjual habis!
            </p>
            <p className="text-xs md:text-sm text-center text-purple-800">
              Coba cari perjalanan lainnya!
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row mt-6 max-w-5xl mx-auto gap-4">
          <div className="w-full md:w-1/4">
            <Filter />
          </div>
          <div className="flex-1 bg-white p-4 md:p-6 rounded-md">
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
