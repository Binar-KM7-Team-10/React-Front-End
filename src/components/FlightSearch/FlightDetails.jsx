import React from "react";
import ImageFlight from "../../assets/Images/ImageFlight.png";

const FlightDetails = () => {
  const flight = {
    bookingCode: "6723y2GHK",
    departure: {
      time: "07:00",
      date: "3 Maret 2023",
      location: "Soekarno Hatta - Terminal 1A Domestik",
    },
    arrival: {
      time: "11:00",
      date: "3 Maret 2023",
      location: "Melbourne International Airport",
    },
    flight: {
      airline: "Jet Air",
      class: "Economy",
      code: "JT - 203",
      info: {
        baggage: "20 kg",
        cabinBaggage: "7 kg",
        entertainment: "In Flight Entertainment",
      },
    },
    price: {
      adults: {
        count: 2,
        price: 9550000,
      },
      baby: {
        count: 1,
        price: 0,
      },
      tax: 300000,
    },
  };

  return (
    <div className="mt-4 p-4 bg-white rounded text-sm">
      <div className="mb-6">
        <span className="text-purple-900 font-bold">Detail Penerbangan</span>
        <div className="flex justify-between text-sm">
          <span className="font-bold">{flight.departure.time}</span>
          <span className="text-purple-600">Keberangkatan</span>
        </div>
        <div className="text-sm">{flight.departure.date}</div>
        <div className="font-medium">{flight.departure.location}</div>
      </div>
      <div className="mb-6">
        <div className="font-bold">
          {flight.flight.airline} - {flight.flight.class}
        </div>
        <div className="font-bold">{flight.flight.code}</div>
        <div className="mt-2">
          <div className="text-sm text-black-600 font-bold flex items-center gap-2">
            <img
              src={ImageFlight}
              alt="Image Flight"
              className="w-5 h-5"
            />
            Informasi:
          </div>
          <ul className="text-sm text-gray-600 ml-6">
            <li>Baggage {flight.flight.info.baggage}</li>
            <li>Cabin baggage {flight.flight.info.cabinBaggage}</li>
            <li>{flight.flight.info.entertainment}</li>
          </ul>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between text-sm">
          <span className="font-bold">{flight.arrival.time}</span>
          <span className="text-purple-600">Kedatangan</span>
        </div>
        <div className="text-sm">{flight.arrival.date}</div>
        <div className="font-medium">{flight.arrival.location}</div>
      </div>
    </div>
  );
};

export default FlightDetails;
