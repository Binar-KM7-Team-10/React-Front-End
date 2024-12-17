import { axiosInstance } from "../api/axiosInstance";

const GetBooking = async (params = {}) => {
  try {
    const queryParams = new URLSearchParams(params).toString();
    const response = await axiosInstance.get(`/bookings?${queryParams}`);
    console.log('Bookings fetched successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching bookings:", error.response ? error.response.data : error.message);
    throw error;
  }
};

const GetBookingById = async (id) => {
  try {
    const response = await axiosInstance.get(`/bookings/${id}`);
    console.log('Booking fetched by ID:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching booking by ID:", error.response ? error.response.data : error.message);
    throw error;
  }
};

const CreateBooking = async (bookingData) => {
  try {
    const response = await axiosInstance.post("/bookings", bookingData);
    console.log('Booking created:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating booking:", error.response ? error.response.data : error.message);
    throw error;
  }
};

const CreatePaymentBooking = async (id, paymentData) => {
  try {
    const response = await axiosInstance.post(`/bookings/${id}/payment`, paymentData);
    console.log('Payment created:', response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating payment:", error.response ? error.response.data : error.message);
    throw error;
  }
};

export { GetBooking, GetBookingById, CreateBooking, CreatePaymentBooking };
