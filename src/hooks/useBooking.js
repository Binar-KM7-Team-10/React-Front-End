import { useState, useEffect, useCallback } from "react";
import { CreateBooking, CreatePaymentBooking } from "../services/booking.service";
import { GetScheduleById } from "../services/schedule.service";
import { useBookingContext } from "../contexts/BookingContext";

export const useGetBookingById = (id) => {
  // const { bookingDetails, setBookingDetails } = useBookingContext();
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
          // console.log(response.data)
          // setBookingDetails(response.data);
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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createBooking = useCallback(async (bookingData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    try {
      const response = await CreateBooking(bookingData);
      if (response.success) {
        setSuccess(true);
      } else {
        setError(response.message);
      }
      return response;
    } catch (err) {
      setError(err.message || "An error occurred while creating booking");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createBooking, loading, error, success };
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
