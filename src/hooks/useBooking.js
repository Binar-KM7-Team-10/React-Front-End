import { useState, useEffect, useCallback } from "react";
import { CreateBooking, CreatePaymentBooking } from "../services/booking.service";
import { GetScheduleById } from "../services/schedule.service";
import { useBookingContext } from "../contexts/BookingContext";

export const useGetBookingById = (id) => {
  const [dataBooking, setDataBooking] = useState({})
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const response = await GetScheduleById(id);
        if (response.success) {
          setDataBooking(response.data);
        } else {
          setError(response.message || "Failed to fetch booking details.");
        }
      } 
      catch (err) {
        setError(err.message || "An error occurred while fetching booking details.");
      } 
      finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, []);

  return {dataBooking, loading, error };
};

export const useCreateBooking = () => {
  const [loadingBooking, setLoadingBooking] = useState(false);
  const [errorBooking, setErrorBooking] = useState(null);
  const [success, setSuccess] = useState(false);
  const [bookingCode, setBookingCode] = useState("")

  const createBooking = useCallback(async (bookingData) => {
    setLoadingBooking(true);
    setErrorBooking(null);
    setSuccess(false);
    try {
      const response = await CreateBooking(bookingData);
      if (response.success) {
        setSuccess(true);
        return response.data.bookingCode
      } else {
        setErrorBooking(response.message);
      }
    } catch (err) {
      setErrorBooking(err.message || "An error occurred while creating booking");
      throw err;
    } finally {
      setLoadingBooking(false);
    }
  }, []);

  return { createBooking, loadingBooking, errorBooking, success, bookingCode };
};

export const useCreatePaymentBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createPayment = useCallback(async (id, paymentData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await CreatePaymentBooking(id, paymentData);
      setSuccess(true);
      return response;
    } catch (err) {
      setError(err.message || "An error occurred while creating payment");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createPayment, loading, error, success };
};
