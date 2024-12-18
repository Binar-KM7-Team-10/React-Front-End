
import { axiosInstance } from "../api/axiosInstance";

// const GetBooking = async (params) => {
//   try {
//     const response = await axiosInstance.get("/bookings", {params} );
//     console.log('Bookings fetched successfully:', response.data);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

const GetBookingById = async (id) => {
  try {
    const response = await axiosInstance.get(`/bookings/${id}`);
  return {
    success: true,
    data: response.data.data,
    message: response.data.message || "Booking successfully retrieved"
  };
  } catch (err) {
    if (err.response?.status === 404) {
      return {
        success: false,
        data: null,
        message: "Booking not found"
      };
    }

    if (err.response?.status === 400) {
      return {
        success: false,
        data: null,
        message: "Invalid booking ID"
      };
    }
    return {
      success: false,
      data: null,
      message: err.response?.data?.message || "Failed to fetch booking"
    };
  }
};

const CreateBooking = async (bookingData) => {
  try {
    const response = await axiosInstance.post("/bookings", bookingData);
    return {
      success: true,
      data: response.data,
      message: "Booking successfully created"
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.response?.data?.message || "Failed to create booking"
    };
  }
};


const CreatePaymentBooking = async (id, paymentData) => {
  try {
    const response = await axiosInstance.post(`/bookings/${id}/payment`, paymentData);
    console.log('Payment created:', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { GetBookingById, CreateBooking, CreatePaymentBooking };

