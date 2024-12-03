import React, { useState } from "react";
import FlightItem from "./FlightItem";

const ListPenerbangan = ({ flights }) => {
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleToggleDetails = (flightId) => {
    setSelectedFlight(selectedFlight === flightId ? null : flightId);
  };

  return (
    <ul>
      {flights.map((flight) => (
        <FlightItem
          key={flight.id}
          flight={flight}
          isSelected={selectedFlight === flight.id}
          toggleDetails={handleToggleDetails}
        />
      ))}
    </ul>
  );
};

export default ListPenerbangan;
