import { useState, useEffect } from "react";
import { GetBooking, GetBookingById, CreateBooking, CreatePaymentBooking } from "../services/booking.service";

const useGetBookings = (params = {}) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await GetBooking(params);
        setBookings(data.data.bookings);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [params]);

  return { bookings, loading, error };
};

export const useGetBookingById = (id) => {
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const data = await GetBookingById(id);
        setBooking(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  return { booking, loading, error };
};

export const useCreateBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createBooking = async (bookingData) => {
    setLoading(true);
    try {
      const response = await CreateBooking(bookingData);
      return response;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createBooking, loading, error };
};

export const useCreatePaymentBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createPayment = async (id, paymentData) => {
    setLoading(true);
    try {
      const response = await CreatePaymentBooking(id, paymentData);
      return response;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createPayment, loading, error };
};

export default useGetBookings;