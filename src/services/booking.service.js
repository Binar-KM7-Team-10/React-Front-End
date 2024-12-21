
import { axiosInstance } from "../api/axiosInstance";


const GetBookings = async (params) => {
  try {
    const response = await axiosInstance.get("/bookings", {
      params: {
        userId: params.userId,
        bookingCode: params.bookingCode,
        date: params.date,
      },
    });

    if (response.data.status === "Success") {
      return {
        success: true,
        data: response.data.data.bookings, // Menyesuaikan dengan contract
        message: response.data.message || "Bookings successfully retrieved",
        pagination: response.data.pagination, // Tambahan jika ingin mengakses pagination
      };
    }

    return {
      success: false,
      data: null,
      message: response.data.message || "Failed to fetch bookings",
    };
  } catch (error) {
    return {
      success: false,
      data: null,
      message: error.response?.data?.message || "An error occurred",
    };
  }
};

const GetBookingById = async (id) => {
    try {
        const response = await axiosInstance.get(`/bookings/${id}`);
        return {
            success: true,
            data: response.data.data,
            message: response.data.message || "Booking successfully retrieved"
        };
    } 
    catch (err) {
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
        if (response.data.status == "Success") {
            return {
                success: true,
                data: response.data.data,
                message: "Booking successfully created"
            };
        }
        else {
            return {
                success: false,
                data: null,
                message: err.response?.data?.message || "Failed to create booking"
            };
        }
    }
    catch (err) {
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

export { GetBookings, GetBookingById, CreateBooking, CreatePaymentBooking };

