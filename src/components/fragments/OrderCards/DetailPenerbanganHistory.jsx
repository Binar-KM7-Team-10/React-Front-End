import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ImageFlight from "../../../assets/Images/ImageFlight.png";

const DetailPenerbanganHistory = ({ bookingDatas, arryPsg, bookingCode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const bookingData = bookingDatas.itinerary.outbound;
  if (
    !bookingData ||
    !bookingData.departure ||
    !bookingData.arrival ||
    !bookingData.price
  ) {
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

  const getStatusColor = (status) => {
    const colors = {
      Issued: "bg-[#43A047]",
      Unpaid: "bg-[#FF0000]",
      Cancelled: "bg-gray-500",
    };
    return colors[status] || "bg-gray-500";
  };

  const totalPrice =
    (bookingData.price || 0) * (arryPsg[0] || 0) +
    (bookingData.price || 0) * (arryPsg[1] || 0);

    const handlePayment = () => {
      setIsLoading(true); 
      setTimeout(() => {
        navigate(`/payment/${bookingDatas.bookingCode}`);
      }, 800);
    };

  return  (
    <div className="flex flex-col w-full lg:w-96">
      <div className="bg-white p-5 rounded-md shadow-md">
        <div className="w-full flex flex-col items-start">
          <div className="w-full flex justify-between mb-5">
            <span className="text-purple-900 font-bold">
              Detail Penerbangan
            </span>
            <span
              className={`px-4 py-1 ${getStatusColor(bookingDatas.status)} text-white text-xs rounded-full font-semibold`}
            >
              {bookingDatas.status}
            </span>
          </div>
          <span className="font-bold">
            Booking Code: <span className="text-purple-600">{bookingCode}</span>
          </span>
        </div>
        <div className="py-6  border-[#8A8A8A]">
          <div className="flex justify-between text-sm">
            <span className="font-bold">{formattedDepartureTime}</span>
            <span className="text-purple-600">Keberangkatan</span>
          </div>
          <div className="text-sm">{formattedDepartureDate}</div>
          <div className="font-medium">
            {bookingData.departure.location || bookingData.departure.city}
          </div>
        </div>

        <div className="mb-6 border-b-2 pb-5">
          <div className="font-bold">
            {bookingData.airlineName || "N/A"} -{" "}
            {bookingData.seatClass || "N/A"}
          </div>
          <div className="font-bold">{bookingData.flightNumber || "N/A"}</div>
          <div className="mt-2">
            <div className="text-sm text-black-600 font-bold flex items-center gap-2">
              <img
                src={ImageFlight}
                alt="Image FlightDetail"
                className="w-5 h-5"
              />
              Informasi:
            </div>
            <ul className="text-sm text-gray-600 ml-6 list-inside">
              {Object.entries(bookingData.facilities).map(
                ([key, value], index) => (
                  <li key={index}>
                    {key} :{" "}
                    {typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : value}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm">
            <span className="font-bold">{formattedArrivalTime}</span>
            <span className="text-purple-600">Kedatangan</span>
          </div>
          <div className="text-sm">{formattedArrivalDate}</div>
          <div className="font-medium">
            {bookingData.arrival.location || bookingData.arrival.city}
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="font-medium mb-2">Rincian Harga</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>{arryPsg[0] || 0} Dewasa</span>
              <span>
                IDR {(bookingData.price * arryPsg[0] || 0).toLocaleString()}
              </span>
            </div>
            {arryPsg[1] != 0 && (
              <div className="flex justify-between text-sm">
                <span>{arryPsg[1]} Anak-anak</span>
                <span>
                  IDR {(bookingData.price * arryPsg[1]).toLocaleString()}
                </span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-purple-600 pt-2 border-t">
              <span>Total</span>
              <span>IDR {totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
       {bookingDatas.status === "Unpaid" && (
        <div className="mt-6 flex justify-center">
        {isLoading ? (
        <div className="flex items-center space-x-2">
          <p className="w-[350px] bg-[#FF0000] text-white text-center py-4 rounded-[12px] text-xl hover:opacity-90 transition-opacity shadow-md">Loading...</p>
        </div>
      ) : (
        <button
          onClick={handlePayment}
          className="w-[350px] bg-[#FF0000] text-white py-4 rounded-[12px] text-xl hover:opacity-90 transition-opacity shadow-md"
        >
          Lanjut Bayar
        </button>
      )}
        </div>
      )}
    </div>
  );
};

export default DetailPenerbanganHistory;
