import React from "react";
import logo from  "../../../assets/Images/logo_new.png";

const PrintTicket = () => {
  const formattedDepartureTime = "07:00";
  const formattedDepartureDate = "3 Maret 2023";
  const formattedArrivalTime = "11:00";
  const formattedArrivalDate = "3 Maret 2023";

  const bookingData = {
    departure: { location: "Soekarno Hatta - Terminal 1A Domestik", city: "Jakarta" },
    arrival: { location: "Melbourne International Airport", city: "Melbourne" },
    airlineName: "Jet Air",
    seatClass: "Economy",
    flightNumber: "JT-203",
    facilities: { "Baggage 20 kg": true, "Cabin baggage 7 kg": true, "In Flight Entertainment": false },
    price: 9550000,
    tax: 300000,
  };

  const arryPsg = [2, 1]; // 2 Adults, 1 Child
  const totalPrice = bookingData.price * arryPsg[0] + bookingData.price * (arryPsg[1] || 0) + bookingData.tax;

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
          <div className="font-medium">{bookingData.departure.location || bookingData.departure.city}</div>
        </div>

        <div className="mb-6 border-b-2 pb-5">
          <div className="font-bold">
            {bookingData.airlineName} - {bookingData.seatClass}
          </div>
          <div className="font-bold">{bookingData.flightNumber}</div>
          <div className="mt-2">
            <div className="text-sm text-black-600 font-bold flex items-center gap-2">
              <span>🌟</span>
              Informasi:
            </div>
            <ul className="text-sm text-gray-600 ml-6 list-inside">
              {Object.entries(bookingData.facilities).map(([key, value], index) => (
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
          <div className="font-medium">{bookingData.arrival.location || bookingData.arrival.city}</div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium mb-2">Rincian Harga</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{arryPsg[0]} Dewasa</span>
              <span>IDR {(bookingData.price * arryPsg[0]).toLocaleString()}</span>
            </div>
            {arryPsg[1] !== 0 && (
              <div className="flex justify-between text-sm">
                <span>{arryPsg[1]} Anak-anak</span>
                <span>IDR {(bookingData.price * arryPsg[1]).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>IDR {bookingData.tax.toLocaleString()}</span>
            </div>
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
