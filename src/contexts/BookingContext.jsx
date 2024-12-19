import React, { createContext, useContext, useState } from "react";

const BookingContext = createContext({
  bookingId: null,
  setBookingId: () => {},
  bookingDetails: null,
  setBookingDetails: () => {},
});

export const BookingProvider = ({ children }) => {
  const [bookingId, setBookingId] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  return (
    <BookingContext.Provider value={{ bookingId, setBookingId, bookingDetails, setBookingDetails }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }
  return context;
};

