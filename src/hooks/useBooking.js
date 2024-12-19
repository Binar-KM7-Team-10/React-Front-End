// import { useState, useEffect, useCallback } from "react";
// import { GetBookings, CreateBooking, CreatePaymentBooking } from "../services/booking.service";
// import { GetScheduleById } from "../services/schedule.service";

// export const useFetchBookings = () => {
//  const [bookings, setBookings] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState({ error: false, message: "" });

//   const fetchBookings = useCallback(async () => {
//     setLoading(true);

//     if (!bookings || typeof bookings !== "object") {
//       setLoading(false);
//       setError({ error: true, message: "Invalid data for booking query" });
//       return;
//     } 
//     if(Object.keys(bookings).length === 0){
//         setLoading(false);
//         return
//     }
//     try{
//       const queryParam = {
//         userId : bookings.userId,
//         bookingCode : bookings.bookingCode,
//         date : bookings.date,
//       }
//       const response = await GetBookings(queryParam);
//       if (response.success && response.data) {
//         if (response.data.length != 0) {                 
//             setBookings(response.data);
//         }
//         else{
//             setBookings([])
//         }
//         setError({ error: false, message: "" });
//       }
//       else {
//           setError({ error: true, message: response.message || "An error occurred" });
//       } 
//     } catch (err) {
//         setError({ error: true, message: err.message || "An error occurred" });
//     } finally {
//         setLoading(false);
//     }
//   }, []);

//   return { bookings, fetchBookings, loading, error };
// }

// export const useGetBookingById = (id) => {
//   const [dataBooking, setDataBooking] = useState({})
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBooking = async () => {
//       if (!id) return;
//       setLoading(true);
//       try {
//         const response = await GetScheduleById(id);
//         if (response.success) {
//           // console.log(response.data)
//           // setBookingDetails(response.data);
//           setDataBooking(response.data);
//         } else {
//           setError(response.message || "Failed to fetch booking details.");
//         }
//       } 
//       catch (err) {
//         setError(err.message || "An error occurred while fetching booking details.");
//       } 
//       finally {
//         setLoading(false);
//       }
//     };

//     fetchBooking();
//   }, []);

//   return {dataBooking, loading, error };
// };

// export const useCreateBooking = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const createBooking = useCallback(async (bookingData) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(false);
//     try {
//       const response = await CreateBooking(bookingData);
//       if (response.success) {
//         setSuccess(true);
//       } else {
//         setError(response.message);
//       }
//       return response;
//     } catch (err) {
//       setError(err.message || "An error occurred while creating booking");
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   return { createBooking, loading, error, success };
// };

// export const useCreatePaymentBooking = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   const createPayment = useCallback(async (id, paymentData) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(false);
//     try {
//       const response = await CreatePaymentBooking(id, paymentData);
//       setSuccess(true);
//       return response;
//     } catch (err) {
//       setError(err.message || "An error occurred while creating payment");
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   return { createPayment, loading, error, success };
// };


import { useState, useEffect, useCallback } from "react";
import { GetBookings, CreateBooking, CreatePaymentBooking } from "../services/booking.service";
import {GetScheduleById} from "../services/schedule.service";

export const useFetchBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBookings = useCallback(async (queryParam) => {
    setLoading(true);
    setError(null);

    if (!queryParam || typeof queryParam !== "object") {
      setLoading(false);
      setError("Invalid data for booking query");
      return;
    }

    try {
      const response = await GetBookings(queryParam);
      if (response?.success && response.data?.bookings) {
        setBookings(response.data.bookings);
      } else {
        setBookings([]);
        setError(response?.message || "No data available.");
      }
    } catch (err) {
      setError(err.message || "An error occurred while fetching bookings.");
    } finally {
      setLoading(false);
    }
  }, []);

  return { bookings, fetchBookings, loading, error };
};


export const useGetBookingById = (id) => {
  const [dataBooking, setDataBooking] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooking = async () => {
      if (!id) return;
      setLoading(true);
      setError(null);
      try {
        const response = await GetScheduleById(id);
        if (response?.success) {
          setDataBooking(response.data);
        } else {
          setError(response?.message || "Failed to fetch booking details.");
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching booking details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [id]);

  return { dataBooking, loading, error };
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
      if (response?.success) {
        setSuccess(true);
      } else {
        setError(response?.message || "Failed to create booking.");
      }
      return response;
    } catch (err) {
      setError(err.message || "An error occurred while creating booking.");
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
      if (response?.success) {
        setSuccess(true);
      } else {
        setError(response?.message || "Failed to process payment.");
      }
      return response;
    } catch (err) {
      setError(err.message || "An error occurred while creating payment.");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createPayment, loading, error, success };
};
