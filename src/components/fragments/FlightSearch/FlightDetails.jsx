import React from "react";
import ImageFlight from "../../../assets/Images/ImageFlight.png";

const FlightDetails = ({ flightDetail, dpTime, arTime }) => {

  const departureDate = new Date(flightDetail.departure.dateTime);
  const formattedDateDp = `${departureDate.getUTCDate()} ${departureDate.toLocaleString('id-ID', { month: 'long' })} ${departureDate.getUTCFullYear()} `;
  const arrivalDate = new Date(flightDetail.arrival.dateTime);
  const formattedDateAr = `${arrivalDate.getUTCDate()} ${arrivalDate.toLocaleString('id-ID', { month: 'long' })} ${arrivalDate.getUTCFullYear()} `;

  return (
    <div className="mt-4 p-4 bg-white rounded text-sm ">
      <div className="py-6 border-t-[1.5px] border-[#8A8A8A]">
        <span className="text-purple-900 font-bold">Detail Penerbangan</span>
        <div className="flex justify-between text-sm">
          <span className="font-bold">{dpTime}</span>
          <span className="text-purple-600">Keberangkatan</span>
        </div>
        <div className="text-sm">{formattedDateDp}</div>
        <div className="font-medium border-b-2 pb-5">{flightDetail.departure.city}</div>
      </div>

      <div className="mb-6 border-b-2 pb-5 w-full">
        <div className="font-bold">
          {flightDetail.airlineName} - {flightDetail.seatClass}
        </div>
        <div className="font-bold">{flightDetail.flightNumber} - {flightDetail.availableSeat}</div>
        <div className="mt-2">
          <div className="text-sm text-black-600 font-bold flex items-center gap-2">
            <img src={ImageFlight} alt="Image FlightDetail" className="w-5 h-5" />
            Informasi:
          </div>
          <ul className="text-sm text-gray-600 ml-6 list-inside">
            {
              Object.entries(flightDetail.facilities).map(([key, value], index) => (
                <li key={index}>
                  {key} : {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </li>
              ))
            }
          </ul>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between text-sm ">
          <span className="font-bold">{arTime}</span>
          <span className="text-purple-600">Kedatangan</span>
        </div>
        <div className="text-sm">{formattedDateAr}</div>
        <div className="font-medium">{flightDetail.arrival.city}</div>
      </div>
    </div>
  );
};

export default FlightDetails;
