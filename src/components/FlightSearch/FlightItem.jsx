import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ImageFlight from "../../assets/Images/ImageFlight.png";
import IconBaggage from "../../assets/Images/icon-park-outline_baggage-delay.png";
import FlightDetails from "./FlightDetails";

const FlightItem = ({ flight, isSelected, toggleDetails }) => (
  <li className="flex flex-col p-4 rounded-md  border-2 mb-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img src={ImageFlight} alt="Image Flight" className="w-5 h-5 mr-2" />
        <div>
          <span className="block font-semibold">
            {flight.airline} - Economy
          </span>
          <div className="text-sm text-gray-600 flex items-center">
            <span className="mr-2">
              {flight.time} &mdash; {flight.duration}
            </span>
            <img src={IconBaggage} alt="Baggage Icon" className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="text-right clearfix ">
        <button
          onClick={() => toggleDetails(flight.id)}
          className="p-2 rounded-full border border-gray-400 bg-white flex items-center justify-center shadow-sm float-right"
        >
          {isSelected ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
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
