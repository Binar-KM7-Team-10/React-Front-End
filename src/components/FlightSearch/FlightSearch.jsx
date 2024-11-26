import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import Filter from "../Filter/Filter";
import ListPenerbangan from "./ListPenerbangan";
import LoadingSearchFlight from "./LoadingSearchFlight";

import not_found_img from '../../assets/Images/tiket_not_found.png'
import empty_img from '../../assets/Images/tiket_habis.png'

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

    // const [flights, setFlights] = useState([])

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
            {/* Header */}
            <div className="max-w-5xl mx-auto bg-white p-4 rounded-md shadow-md">
                <h2 className="text-xl font-semibold text-gray-800">Pilih Penerbangan</h2>
                <div className="flex gap-3 items-center justify-between mt-4 w-full">
                    <div className="flex items-center space-x-2 bg-purple-500 text-white py-3 px-4 rounded-md w-9/12">
                        <FiArrowLeft size={20} />
                        <span className="text-base">JKT &gt; MLB - 2 Penumpang - Economy</span>
                    </div>
                    <div className="w-3/12">
                        <button className="bg-success text-base font-bold text-white px-4 py-3 rounded-md w-full">
                            Ubah Pencarian
                        </button>
                    </div>
                </div>
                <div className="flex mt-4 justify-between">
                    {days.map((day, index) => (
                        <>
                            <button
                                key={index}
                                className={`flex flex-col items-center justify-center py-2 px-5 rounded-md hover:bg-purple-700 hover:text-white ${day === selectedDay
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
                        </>
                    ))}
                </div>
            </div>

            {flights.length === 0 ? (
                <div className="flex justify-center w-full my-20">
                    <div>
                        <img src={empty_img} className="" alt="" />
                        <p className="text-sm text-center mt-10">Maaf, Tiket terjual habis!</p>
                        <p className="text-sm text-center text-purple-600">Coba cari perjalanan lainnya!</p>
                    </div>
                </div>
            ) : (
                <div className="flex mt-10 max-w-5xl mx-auto space-x-4">
                    <div className="w-1/4">
                        <Filter />
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-md shadow-md">
                        <div>
                            <div className="flex justify-end items-center mb-4">
                                <span className="mr-4 text-gray-600">Urutkan:</span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleSort("asc")}
                                        className={`px-4 py-2 rounded-md ${sortOrder === "asc"
                                            ? "bg-purple-400 text-white"
                                            : "bg-gray-200 text-gray-800"
                                            }`}
                                    >
                                        Termurah
                                    </button>
                                    <button
                                        onClick={() => handleSort("desc")}
                                        className={`px-4 py-2 rounded-md ${sortOrder === "desc"
                                            ? "bg-purple-400 text-white"
                                            : "bg-gray-200 text-gray-800"
                                            }`}
                                    >
                                        Termahal
                                    </button>
                                </div>
                            </div>
                            <ul className="space-y-4">
                                <ListPenerbangan flights={flights} />
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlightSearch;
