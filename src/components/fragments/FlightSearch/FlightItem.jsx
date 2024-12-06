import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ImageFlight from "../../../assets/Images/ImageFlight.png";
import IconBaggage from "../../../assets/Images/icon-park-outline_baggage-delay.png";
import IconArrow from "../../../assets/Images/Arrow.png";
import FlightDetails from "./FlightDetails";

const FlightItem = ({ flight, isSelected, toggleDetails }) => (
  <li className="flex flex-col p-4 rounded-lg border mb-4 bg-white shadow-md">
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
      {/* Left section: flight details */}
      <div className="flex flex-col w-full sm:w-3/4 mb-4 sm:mb-0">
        <div className="flex items-center mb-2">
          {/* Airline icon and text */}
          <img src={ImageFlight} alt="Image Flight" className="w-6 h-6 mr-2" />
          <span className="font-medium text-sm sm:text-base">
            {flight.airline} - {flight.class}
          </span>
        </div>

        <div className="text-sm text-black flex items-center">
          {/* Flight time and cities */}
          <div className="flex flex-col text-center mr-4">
            <span className="font-bold text-base">{flight.departuretime}</span>
            <span className="text-gray-500 text-xs">
              {flight.citydeparture}
            </span>
          </div>

          {/* Duration and arrow with status */}
          <div className="flex flex-col items-center mx-2">
            <span className="text-xs text-gray-500">{flight.duration}</span>{" "}
            {/* Duration above arrow */}
            <img src={IconArrow} alt="Arrow Icon" className="h-2.5" />
            <span className="text-xs text-gray-500">{flight.status}</span>{" "}
            {/* Status below arrow */}
          </div>

          <div className="flex flex-col text-center ml-4 relative">
            {/* Arrival time and city (now displayed vertically on web as well) */}
            <span className="font-bold text-base">{flight.arrivaltime}</span>
            <span className="text-gray-500 text-xs">{flight.cityarrival}</span>

            {/* Icon baggage for web (hidden on mobile) */}
            <div className="hidden sm:block absolute top-1/2 transform -translate-y-1/2 right-0 mr-2">
              <img src={IconBaggage} alt="Baggage Icon" className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Icon baggage for mobile (visible only on mobile) */}
        <div className="flex items-center mt-2 sm:hidden">
          <img src={IconBaggage} alt="Baggage Icon" className="w-5 h-5 mr-2" />
        </div>
      </div>

      {/* Right section: pricing and actions */}
      <div className="flex flex-col items-end w-full sm:w-1/4">
        {/* Special offer label */}
        {flight.isSpecialOffer && (
          <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full mb-2">
            Today Only!
          </span>
        )}
        <div className="font-bold text-purple-800 text-lg">
          IDR {flight.price.toLocaleString("id-ID")}
        </div>
        <button
          onClick={() => toggleDetails(flight.id)}
          className="mt-2 p-2 rounded-full border border-gray-300 bg-white shadow-sm flex items-center justify-center"
        >
          {isSelected ? (
            <FaChevronUp className="text-gray-600" />
          ) : (
            <FaChevronDown className="text-gray-600" />
          )}
        </button>
        <button className="mt-3 bg-purple-800 text-white px-4 py-2 rounded-2xl w-full sm:w-auto">
          Pilih
        </button>
      </div>
    </div>

    {/* Expanded flight details */}
    {isSelected && <FlightDetails />}
  </li>
);

export default FlightItem;
