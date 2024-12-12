import React, { useState, useEffect } from "react";
import { ArrowUpDown } from "lucide-react";

import Filter from "../Filter/Filter";
import ListPenerbangan from "./ListPenerbangan";
import emptyImg from "../../../assets/Images/tiket_habis.png";
import FlightSearchHeader from "./FlightSearchHeader";
import LoadingSearchFlight from "./LoadingSearchFlight.jsx";
import useFetchSchedule from "../../../hooks/useFetchSchedule.js";
import { useSearchContext } from "../../../contexts/searchFlightContext";

const FlightSearch = () => {
  const { searchParams } = useSearchContext();
  const { schedule, error, loading, onSubmitSchedule } = useFetchSchedule();
  const [flights, setFlights] = useState([]);
  

  const [selectedDay, setSelectedDay] = useState("Rabu");
  const days = [
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
    "Senin",
  ];
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

  const [selectedOption, setSelectedOption] = useState("Harga - Termurah");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const options = [
    "Harga - Termurah",
    "Durasi - Terpendek",
    "Keberangkatan - Paling Awal",
    "Keberangkatan - Paling Akhir",
    "Kedatangan - Paling Awal",
    "Kedatangan - Paling Akhir",
  ];

  useEffect(() => {
    if (searchParams) {
      onSubmitSchedule(searchParams);
    }
  }, [searchParams, onSubmitSchedule]);

  useEffect(() => {
    setFlights(schedule);
  }, [schedule]);

  const handleSort = (option) => {
    setSelectedOption(option);
    const sortedFlights = [...flights];

    switch (option) {
      case "Harga - Termurah":
        sortedFlights.sort((a, b) => a.price - b.price);
        break;
      case "Durasi - Terpendek":
        sortedFlights.sort((a, b) => a.duration.localeCompare(b.duration));
        break;
      case "Keberangkatan - Paling Awal":
        sortedFlights.sort((a, b) => new Date(a.departureTime) - new Date(b.departureTime));
        break;
      case "Keberangkatan - Paling Akhir":
        sortedFlights.sort((a, b) => new Date(b.departureTime) - new Date(a.departureTime));
        break;
      case "Kedatangan - Paling Awal":
        sortedFlights.sort((a, b) => new Date(a.arrivalTime) - new Date(b.arrivalTime));
        break;
      case "Kedatangan - Paling Akhir":
        sortedFlights.sort((a, b) => new Date(b.arrivalTime) - new Date(a.arrivalTime));
        break;
      default:
        break;
    }
    setFlights(sortedFlights);
    setIsFilterOpen(false);
  };

  return (
    <div className="min-h-screen p-4 md:p-6">
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
                ×
              </button>
            </div>
            <ul className="py-4">
              {options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleSort(option)}
                  className={`flex justify-between items-center py-2 px-4 cursor-pointer hover:bg-gray-100 text-xs md:text-sm ${selectedOption === option ? "font-bold text-purple-800" : ""
                    }`}
                >
                  <span>{option}</span>
                  {selectedOption === option && <span>✔</span>}
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

      {loading ? (
        <LoadingSearchFlight />
      ) : error.error ? (
        <div className="flex justify-center w-full my-10 md:my-20">
          <p className="text-red-500">{error.message}</p>
        </div>
      ) : flights.length === 0 ? (
        <div className="flex justify-center w-full my-10 md:my-20">
          <div>
            <img src={emptyImg} className="w-32 md:w-48" alt="Tiket habis" />
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
            <ListPenerbangan flights={flights} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FlightSearch;
