import React from "react";
import logo from "../../../assets/Images/logo_new.png";

const PrintTicket = ({ bookingData, arryPsg, bookingCode }) => {

  console.log(bookingData)

  // const formattedDepartureTime = "07:00";
  // const formattedDepartureDate = "3 Maret 2023";
  // const formattedArrivalTime = "11:00";
  // const formattedArrivalDate = "3 Maret 2023";

  const departureDate = new Date(bookingData.departure.dateTime || null);
  const formattedDepartureTime = departureDate
    ? `${departureDate.getHours()}:${departureDate.getMinutes().toString().padStart(2, "0")}`
    : "N/A";
  const formattedDepartureDate = departureDate
    ? `${departureDate.getUTCDate()} ${departureDate.toLocaleString("id-ID", { month: "long" })} ${departureDate.getUTCFullYear()}`
    : "N/A";

  const arrivalDate = new Date(bookingData.arrival.dateTime || null);
  const formattedArrivalTime = arrivalDate
    ? `${arrivalDate.getHours()}:${arrivalDate.getMinutes().toString().padStart(2, "0")}`
    : "N/A";
  const formattedArrivalDate = arrivalDate
    ? `${arrivalDate.getUTCDate()} ${arrivalDate.toLocaleString("id-ID", { month: "long" })} ${arrivalDate.getUTCFullYear()}`
    : "N/A";

  const bookingDatas = {
    departure: { location: `${bookingData.departure.airportName} - Terminal ${bookingData.departure.terminalGate}`, city: `${bookingData.departure.city}` },
    arrival: { location: `${bookingData.arrival.airportName}`, city: `${bookingData.arrival.city}` },
    airlineName: `${bookingData.airlineName}`,
    seatClass: `${bookingData.seatClass}`,
    flightNumber: `${bookingData.flightNumber}`,
    facilities: bookingData.facilities,
    price: bookingData.price,
    // tax: 300000,
  };

  // const arryPsg = [2, 1]; // 2 Adults, 1 Child
  const totalPrice = bookingDatas.price * arryPsg[0] + bookingDatas.price * (arryPsg[1] || 0) + bookingDatas.tax;

  return (
    <div className="flex justify-center">
      <div className="bg-white p-5 rounded-md shadow-md w-full lg:w-96">
        <div className="flex items-center justify-between mb-5">
          <img src={logo} alt="Logo" className="h-12" />
          <span className="text-xl font-bold text-purple-900 pt-4">Penerbangan</span>
        </div>

        <div className="py-6 border-t-[1.5px] border-[#8A8A8A]">
          <span className="text-purple-900 font-bold">Detail Penerbangan</span>
          <div className="flex justify-between text-sm">
            <span className="font-bold">{formattedDepartureTime}</span>
            <span className="text-purple-600">Keberangkatan</span>
          </div>
          <div className="text-sm">{formattedDepartureDate}</div>
          <div className="font-medium">{bookingDatas.departure.location || bookingDatas.departure.city}</div>
        </div>

        <div className="mb-6 border-b-2 pb-5">
          <div className="font-bold">
            {bookingDatas.airlineName} - {bookingDatas.seatClass}
          </div>
          <div className="font-bold">{bookingDatas.flightNumber}</div>
          <div className="mt-2">
            <div className="text-sm text-black-600 font-bold flex items-center gap-2">
              <span>🌟</span>
              Informasi:
            </div>
            <ul className="text-sm text-gray-600 ml-6 list-inside">
              {Object.entries(bookingDatas.facilities).map(([key, value], index) => (
                <li key={index}>
                  {key}: {value ? "Yes" : "No"}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm">
            <span className="font-bold">{formattedArrivalTime}</span>
            <span className="text-purple-600">Kedatangan</span>
          </div>
          <div className="text-sm">{formattedArrivalDate}</div>
          <div className="font-medium">{bookingDatas.arrival.location || bookingDatas.arrival.city}</div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium mb-2">Rincian Harga</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{arryPsg[0]} Dewasa</span>
              <span>IDR {(bookingDatas.price * arryPsg[0]).toLocaleString()}</span>
            </div>
            {arryPsg[1] !== 0 && (
              <div className="flex justify-between text-sm">
                <span>{arryPsg[1]} Anak-anak</span>
                <span>IDR {(bookingDatas.price * arryPsg[1]).toLocaleString()}</span>
              </div>
            )}
            {/* <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>IDR {bookingDatas.tax.toLocaleString()}</span>
            </div> */}
            <div className="flex justify-between font-semibold text-purple-600 pt-2 border-t">
              <span>Total</span>
              <span>IDR {totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintTicket;
