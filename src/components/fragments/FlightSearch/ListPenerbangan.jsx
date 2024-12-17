import React, { useState } from "react";
import FlightItem from "./FlightItem";
import emptyImg from "../../../assets/Images/tiket_habis.png";
import notFoundImg from "../../../assets/Images/tiket_not_found.png";

const ListPenerbangan = ({ flights = [] }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);
  console.log(flights)

  const handleToggleDetails = (flightId) => {
    setSelectedFlight(selectedFlight === flightId ? null : flightId);
  };

  if (!Array.isArray(flights) || flights.length === 0) {
    return (
      <div className="flex justify-center w-full my-10 md:my-20">
        <div>
          <img src={notFoundImg} className="w-32 md:w-48" alt="Tiket habis" />
          <p className="text-xs md:text-sm text-center mt-4 md:mt-10">
            Maaf, Tiket terjual habis!
          </p>
          <p className="text-xs md:text-sm text-center text-purple-800">
            Coba cari perjalanan lainnya!
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul>
      {flights.map((flight) => (
        <FlightItem
          key={flight.scheduleId}
          flight={flight}
          isSelected={selectedFlight === flight.scheduleId}
          toggleDetails={handleToggleDetails}
        />
      ))}
    </ul>
  );
};

export default ListPenerbangan;
