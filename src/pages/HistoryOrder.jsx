import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Navbar from "../components/fragments/Navbar/Navbar";
import OrderHeaderHistory from "../components/fragments/OrderSection/OrderHeaderHistory";
import DetailCardTicket from "../components/fragments/FlightCards/DetailCardTicket";
import DetailPenerbangan from "../components/fragments/OrderCards/DetailPenerbangan";
import { useFetchBookings, useGetBookingById } from "../hooks/useBooking";

const HistoryOrder = () => {
  const { bookings, fetchBookings, loading, error } = useFetchBookings();
  const [selectedBookingId, setSelectedBookingId] = useState(null);  
  const { dataBooking, loading: loadingBooking, error: bookingError } = useGetBookingById(selectedBookingId);

  const userCookie = Cookies.get("user");
  const userData = userCookie ? JSON.parse(userCookie) : {};
  const userId = userData.id;

  useEffect(() => {
    const queryParams = { userId: userId };
    fetchBookings(queryParams);
  }, [userId]);

  const handleTicketClick = (id) => {
    setSelectedBookingId(id); 
  };

  if (error !== "") {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar search={false} type="auth" />
        <div className="flex justify-center items-center h-screen">
          <div className="text-center p-4">
            <h2 className="text-xl font-bold text-red-600 mb-2">Oops! Something went wrong</h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    loading ? (
      <div className="min-h-screen flex flex-col">
        <Navbar search={false} type="auth" />
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#7126B5]"></div>
        </div>
      </div>
    ) : !bookings || bookings.length === 0 ? (
      <div className="min-h-screen flex flex-col">
        <Navbar search={false} type="auth" />
        <OrderHeaderHistory />
        <div className="flex justify-center items-center h-screen">
          <div className="text-center p-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">No Tickets Found</h2>
            <p className="text-gray-600">No booking information available for this ID.</p>
          </div>
        </div>
      </div>
    ) : (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar search={false} type="auth" />
        <OrderHeaderHistory />
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-lg md:flex py-4 md:py-8 gap-6">
          <div className="flex-1 md:w-7/12 space-y-4">
            <p className="text-black text-base font-bold px-2 md:px-12">
              {new Date(bookings[0]?.date).toLocaleDateString("id-ID", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <div className="space-y-4 cursor-pointer">
              {bookings.map((ticket, index) => (
                <DetailCardTicket
                  key={`${ticket.bookingCode}-${index}`}
                  bookings={ticket}
                  onClick={handleTicketClick}  
                />
              ))}
            </div>
          </div>
          <div className="md:w-5/12 mt-6 md:mt-0">
            {loadingBooking ? (
              <div className="text-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#7126B5]"></div>
              </div>
            ) : ( 
              selectedBookingId && dataBooking && (
                <DetailPenerbangan bookingData={dataBooking} />
              )
            )}
            {bookings[0]?.status === "Unpaid" && (
              <div className="mt-6 px-4 md:px-0">
                <button className="w-full bg-[#FF0000] text-white py-3 md:py-4 rounded-xl text-lg md:text-xl hover:opacity-90 transition-opacity shadow-md">
                  Lanjut Bayar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default HistoryOrder;
