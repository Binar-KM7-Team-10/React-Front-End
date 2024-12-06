import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import only what's necessary
import ImageFlight from "../../../assets/Images/ImageFlight.png";
import IconBaggage from "../../../assets/Images/icon-park-outline_baggage-delay.png";
import IconArrow from "../../../assets/Images/Arrow.png";
import FlightDetails from "./FlightDetails";

const FlightItem = ({ flight, isSelected, toggleDetails }) => (
  <li className="flex flex-col p-4 rounded-md border-2 mb-4">
    <div className="flex justify-between items-center">
      <div className="flex flex-col">
        <div className="flex items-center mb-2">
          {/* Aligning ImageFlight and airline text next to each other */}
          <img src={ImageFlight} alt="Image Flight" className="w-5 h-5 mr-2" />
          <span className="font-medium text-xs">
            {flight.airline} - Economy
          </span>
        </div>
        {/* Flight details like departure time, city, etc., now below the airline */}
        <div className="text-sm text-black">
          <div className="flex items-center mb-2">
            <div className="flex flex-col text-center mr-2">
              <span className="text-sm text-black-500 font-bold">{flight.departuretime}</span>
              <span className="text-xs text-black-500 font-medium">{flight.citydeparture}</span>
            </div>
            <div className="flex flex-col items-center mx-2"> 
              <span className="text-sm text-gray-500">{flight.duration}</span> 
              <img src={IconArrow} alt="Arrow Icon" className="h-3 mx-1" />
              <span className="text-sm text-gray-500">{flight.status}</span>
            </div>
            <div className="flex flex-col text-center">
              <span className="text-sm text-black-500 font-bold">{flight.arrivaltime}</span>
              <span className="text-xs text-black-500 font-medium">{flight.cityarrival}</span>
            </div>
            <img src={IconBaggage} alt="Baggage Icon" className="w-5 h-5 mx-2" />
          </div>
        </div>
      </div>
      <div className="text-right clearfix">
        <button
          onClick={() => toggleDetails(flight.id)}
          className="p-2 rounded-full border border-gray-400 bg-white flex items-center justify-center shadow-sm float-right"
        >
          {isSelected ? (
            <FaChevronUp className="text-gray-600" />
          ) : (
            <FaChevronDown className="text-gray-600" />
          )}
        </button>
        <div className="font-bold text-purple-800 clear-right pt-3">
          IDR {flight.price.toLocaleString("id-ID")}
        </div>
        <div className="flex items-center gap-4 mt-2">
          <button className="bg-purple-800 text-white px-4 py-2 rounded-2xl w-full">
            Pilih
          </button>
        </div>
      </div>
    </div>
    {isSelected && <FlightDetails />}
  </li>
);

export default FlightItem;
