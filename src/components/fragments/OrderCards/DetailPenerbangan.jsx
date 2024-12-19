import React from "react";
import { useParams, Link } from "react-router-dom";
import { Plane } from "lucide-react";
import { useGetBookingById } from "../../../hooks/useBooking"; 
import ImageFlight from "../../../assets/Images/ImageFlight.png";

const DetailPenerbangan = ({ bookingData, arryPsg }) => {
  if (!bookingData || !bookingData.departure || !bookingData.arrival || !bookingData.price) {
    return <div>Data penerbangan tidak tersedia atau belum lengkap.</div>;
  }

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

  // const totalPrice =
  //   (bookingData.price?.adults?.price || 0) * (bookingData.price?.adults?.count || 0) +
  //   (bookingData.price?.baby?.price || 0) * (bookingData.price?.baby?.count || 0) +
  //   (bookingData.price?.tax || 0);

  const totalPrice =
    (bookingData.price || 0) * (arryPsg[0] || 0) +
    (bookingData.price || 0) * (arryPsg[1] || 0);

  return (
    <div className="flex flex-col w-full lg:w-96">
      <div className="bg-white p-5 rounded-md shadow-md">
        {/* Detail Penerbangan */}
        <div className="py-6 border-t-[1.5px] border-[#8A8A8A]">
          <span className="text-purple-900 font-bold">Detail Penerbangan</span>
          <div className="flex justify-between text-sm">
            <span className="font-bold">{formattedDepartureTime}</span>
            <span className="text-purple-600">Keberangkatan</span>
          </div>
          <div className="text-sm">{formattedDepartureDate}</div>
          <div className="font-medium">{bookingData.departure.location || bookingData.departure.city}</div>
        </div>

        {/* Detail Pesawat */}
        <div className="mb-6 border-b-2 pb-5">
          <div className="font-bold">
            {bookingData.airlineName || "N/A"} - {bookingData.seatClass || "N/A"}
          </div>
          <div className="font-bold">{bookingData.flightNumber || "N/A"}</div>
          <div className="mt-2">
            <div className="text-sm text-black-600 font-bold flex items-center gap-2">
              <img src={ImageFlight} alt="Image FlightDetail" className="w-5 h-5" />
              Informasi:
            </div>
            <ul className="text-sm text-gray-600 ml-6 list-inside">
            {
              Object.entries(bookingData.facilities).map(([key, value], index) => (
                <li key={index}>
                  {key} : {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </li>
              ))
            }
            </ul>
          </div>
        </div>

        {/* Kedatangan */}
        <div className="mb-6">
          <div className="flex justify-between text-sm">
            <span className="font-bold">{formattedArrivalTime}</span>
            <span className="text-purple-600">Kedatangan</span>
          </div>
          <div className="text-sm">{formattedArrivalDate}</div>
          <div className="font-medium">{bookingData.arrival.location || bookingData.arrival.city}</div>
        </div>

        {/* Rincian Harga */}
        <div className="border-t pt-4">
          <h3 className="font-medium mb-2">Rincian Harga</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{arryPsg[0] || 0} Dewasa</span>
              <span>IDR {(bookingData.price * arryPsg[0] || 0).toLocaleString()}</span>
            </div>
            {arryPsg[1] != 0 && (
              <div className="flex justify-between text-sm">
                <span>{arryPsg[1]} Anak-anak</span>
                <span>IDR {(bookingData.price * arryPsg[1]).toLocaleString()}</span>
              </div>
            )}
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span>IDR {bookingData.price?.tax?.toLocaleString()}</span>
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
