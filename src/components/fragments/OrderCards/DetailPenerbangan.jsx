// import React from "react";
// import { CreditCard, ChevronDown, ChevronUp, Plane } from "lucide-react";

// const DetailPenerbangan = () => {
//   const FLIGHT_DATA = {
//     bookingCode: "6723y2GHK",
//     departure: {
//       time: "07:00",
//       date: "3 Maret 2023",
//       location: "Soekarno Hatta - Terminal 1A Domestik",
//     },
//     arrival: {
//       time: "11:00",
//       date: "3 Maret 2023",
//       location: "Melbourne International Airport",
//     },
//     flight: {
//       airline: "Jet Air",
//       class: "Economy",
//       code: "JT - 203",
//       info: {
//         baggage: "20 kg",
//         cabinBaggage: "7 kg",
//         entertainment: "In Flight Entertainment",
//       },
//     },
//     price: {
//       adults: {
//         count: 2,
//         price: 9550000,
//       },
//       baby: {
//         count: 1,
//         price: 0,
//       },
//       tax: 300000,
//     },
//   };

//   return (
//     <div className="flex flex-col w-full lg:w-96">
//       <div className="bg-white p-5 rounded-md shadow-md">
//         <div className="flex justify-between mb-4">
//           <span className="text-gray-600">Booking Code:</span>
//           <span className="text-purple-600 font-semibold">
//             {FLIGHT_DATA.bookingCode}
//           </span>
//         </div>
//         <div className="mb-6">
//           <div className="flex justify-between text-sm">
//             <span className="text-gray-600">{FLIGHT_DATA.departure.time}</span>
//             <span className="text-purple-600">Keberangkatan</span>
//           </div>
//           <div className="text-sm">{FLIGHT_DATA.departure.date}</div>
//           <div className="font-medium">{FLIGHT_DATA.departure.location}</div>
//         </div>
//         <div className="mb-6">
//           <div className="font-medium">
//             {FLIGHT_DATA.flight.airline} - {FLIGHT_DATA.flight.class}
//           </div>
//           <div className="text-gray-600">{FLIGHT_DATA.flight.code}</div>
//           <div className="mt-2">
//             <div className="flex items-center gap-2 text-sm text-gray-600">
//               <Plane size={16} className="text-yellow-500" />
//               <span>Informasi:</span>
//             </div>
//             <ul className="text-sm text-gray-600 ml-6">
//               <li>Baggage {FLIGHT_DATA.flight.info.baggage}</li>
//               <li>Cabin baggage {FLIGHT_DATA.flight.info.cabinBaggage}</li>
//               <li>{FLIGHT_DATA.flight.info.entertainment}</li>
//             </ul>
//           </div>
//         </div>
//         <div className="mb-6">
//           <div className="flex justify-between text-sm">
//             <span className="text-gray-600">{FLIGHT_DATA.arrival.time}</span>
//             <span className="text-purple-600">Kedatangan</span>
//           </div>
//           <div className="text-sm">{FLIGHT_DATA.arrival.date}</div>
//           <div className="font-medium">{FLIGHT_DATA.arrival.location}</div>
//         </div>
//         <div className="border-t pt-4">
//           <h3 className="font-medium mb-2">Rincian Harga</h3>
//           <div className="space-y-2">
//             <div className="flex justify-between text-sm">
//               <span>{FLIGHT_DATA.price.adults.count} Adults</span>
//               <span>IDR {FLIGHT_DATA.price.adults.price.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span>{FLIGHT_DATA.price.baby.count} Baby</span>
//               <span>IDR {FLIGHT_DATA.price.baby.price}</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span>Tax</span>
//               <span>IDR {FLIGHT_DATA.price.tax.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between font-semibold text-purple-600 pt-2 border-t">
//               <span>Total</span>
//               <span>IDR 9.850.000</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DetailPenerbangan;


import React from "react";
import { useParams, Link } from "react-router-dom";
import { Plane } from "lucide-react";
import { useGetBookingById } from "../../../hooks/useBooking"; 
import ImageFlight from "../../../assets/Images/ImageFlight.png";

const DetailPenerbangan = () => {
  const { id } = useParams(); // Mendapatkan id dari URL params
  const { bookingData, loading, error } = useGetBookingById(id);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center">
        <div>{error}</div>
        <Link to="/retry" className="mt-4 p-2 bg-blue-500 text-white rounded">
          Retry
        </Link>
      </div>
    );
  }

  if (!bookingData) {
    return <div>Data not available</div>;
  }

  const departureDate = new Date(bookingData.departure.dateTime);
  const formattedDepartureTime = `${departureDate.getHours()}:${departureDate.getMinutes()
    .toString()
    .padStart(2, "0")}`;
  const formattedDepartureDate = `${departureDate.getUTCDate()} ${departureDate.toLocaleString("id-ID", {
    month: "long",
  })} ${departureDate.getUTCFullYear()}`;

  const arrivalDate = new Date(bookingData.arrival.dateTime);
  const formattedArrivalTime = `${arrivalDate.getHours()}:${arrivalDate.getMinutes()
    .toString()
    .padStart(2, "0")}`;
  const formattedArrivalDate = `${arrivalDate.getUTCDate()} ${arrivalDate.toLocaleString("id-ID", {
    month: "long",
  })} ${arrivalDate.getUTCFullYear()}`;

  const totalPrice =
    (bookingData.price.adults.price || 0) * (bookingData.price.adults.count || 0) +
    (bookingData.price.baby?.price || 0) * (bookingData.price.baby?.count || 0) +
    (bookingData.price.tax || 0);

  return (
    <div className="flex flex-col w-full lg:w-96">
      <div className="bg-white p-5 rounded-md shadow-md">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Booking Code:</span>
          <span className="text-purple-600 font-semibold">{bookingData.bookingCode || "N/A"}</span>
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
            {bookingData.flight.airlineName} - {bookingData.flight.seatClass}
          </div>
          <div className="font-bold">{bookingData.flight.flightNumber}</div>
          <div className="mt-2">
            <div className="text-sm text-black-600 font-bold flex items-center gap-2">
              <img src={ImageFlight} alt="Image FlightDetail" className="w-5 h-5" />
              Informasi:
            </div>
            <ul className="text-sm text-gray-600 ml-6 list-inside">
              {Object.entries(bookingData.flight.facilities).map(([key, value], index) => (
                <li key={index}>
                  {key}: {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
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
              <span>{bookingData.price.adults.count} Adults</span>
              <span>IDR {bookingData.price.adults.price.toLocaleString()}</span>
            </div>
            {bookingData.price.baby && (
              <div className="flex justify-between text-sm">
                <span>{bookingData.price.baby.count} Baby</span>
                <span>IDR {bookingData.price.baby.price.toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>IDR {bookingData.price.tax.toLocaleString()}</span>
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

export default DetailPenerbangan;



