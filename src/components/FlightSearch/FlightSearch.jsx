import React, { useState } from "react";
import Filter from "../Filter/Filter";
import { FiArrowLeft } from "react-icons/fi";

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
    { id: 1, airline: "Jet Air", time: "07:00", duration: "4h 0m", price: 4950000 },
    { id: 2, airline: "Jet Air", time: "08:00", duration: "4h 0m", price: 5950000 },
    { id: 3, airline: "Jet Air", time: "13:15", duration: "4h 0m", price: 7225000 },
    { id: 4, airline: "Jet Air", time: "20:15", duration: "3h 15m", price: 8010000 },
  ]);

  const [selectedDay, setSelectedDay] = useState("Rabu");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (order) => {
    const sortedFlights = [...flights].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      return b.price - a.price;
    });
    setFlights(sortedFlights);
    setSortOrder(order);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-5xl mx-auto bg-white p-4 rounded-md shadow-md">
        <h2 className="text-xl font-semibold text-gray-800">
          Pilih Penerbangan
        </h2>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-2 bg-purple-400 text-white py-1 px-3 rounded-md">
            <FiArrowLeft size={20} />
            <span>JKT &gt; MLB - 2 Penumpang - Economy</span>
          </div>
          <div>
            <button className="bg-green-500 text-white px-4 py-2 rounded-md">
              Ubah Pencarian
            </button>
          </div>
        </div>
        <div className="flex mt-4 space-x-2">
          {days.map((day, index) => (
            <button
              key={index}
              className={`flex flex-col items-center justify-center py-2 px-3 rounded-md ${
                day === selectedDay
                  ? "bg-purple-400 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setSelectedDay(day)}
            >
              <span className="font-semibold">{day}</span>
              <span className="text-sm">
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

      <div className="flex mt-20 max-w-5xl mx-auto space-x-4">
        <div className="w-1/4">
          <Filter />
        </div>

        <div className="flex-1 bg-white p-6 rounded-md shadow-md">
          {selectedDay === "Rabu" ? (
            <div className="text-center">
              <h3 className="text-gray-600">Mencari penerbangan terbaik...</h3>
              <div className="flex justify-center items-center mt-4">
                <div className="w-32 h-16 bg-purple-200 rounded-lg relative overflow-hidden">
                  <div
                    className="bg-purple-600 h-full w-1/3 absolute animate-slide"
                    style={{
                      animation: "slide 1.5s infinite linear",
                    }}
                  />
                </div>
              </div>
            </div>
          ) : selectedDay === "Kamis" ? (
            <div>
              <div className="flex justify-end items-center mb-4">
                <span className="mr-4 text-gray-600">Urutkan:</span>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSort("asc")}
                    className={`px-4 py-2 rounded-md ${
                      sortOrder === "asc"
                        ? "bg-purple-400 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    Termurah
                  </button>
                  <button
                    onClick={() => handleSort("desc")}
                    className={`px-4 py-2 rounded-md ${
                      sortOrder === "desc"
                        ? "bg-purple-400 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    Termahal
                  </button>
                </div>
              </div>

              <ul className="space-y-4">
                {flights.map((flight) => (
                  <li
                    key={flight.id}
                    className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm"
                  >
                    <div>
                      <span className="block font-semibold text-purple-600">
                        {flight.airline} - Economy
                      </span>
                      <div className="text-sm text-gray-600">
                        {flight.time} &mdash; {flight.duration}
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`font-bold ${
                          flight.price === 5950000
                            ? "text-red-500"
                            : "text-purple-600"
                        }`}
                      >
                        IDR {flight.price.toLocaleString("id-ID")}
                      </div>
                      <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md">
                        Pilih
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <h3 className="text-center text-gray-600">
              Silakan pilih hari Kamis untuk melihat penerbangan.
            </h3>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slide {
          0% { left: -33%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default FlightSearch;
