
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
                data: response.data.data.bookings, 
                message: response.data.message || "Berhasil mendapatkan data booking",
                pagination: response.data.pagination,
            };
        }

        return {
            success: false,
            data: null,
            message: response.data.message || "Gagal mendapatkan data booking",
        };
    } catch (error) {
        return {
            success: false,
            data: null,
            message: error.response?.data?.message || "Terjadi kesalahan, silahkan coba lagi",
        };
    }
};

const GetBookingById = async (id) => {
    try {
        const response = await axiosInstance.get(`/bookings/${id}`);
        return {
            success: true,
            data: response.data.data,
            message: response.data.message || "Berhasil mendapatkan data booking"
        };
    }
    catch (err) {
        if (err.response?.status === 404) {
            return {
                success: false,
                data: null,
                message: "tidak ada data booking"
            };
        }

        if (err.response?.status === 400) {
            return {
                success: false,
                data: null,
                message: "Booking ID tidak ditemukan"
            };
        }
        return {
            success: false,
            data: null,
            message: err.response?.data?.message || "Terjadi kesalahan, silahkan coba lagi"
        };
    }
};

const GetBookingByBookCode = async (bookCode) => {
    try {
        const response = await axiosInstance.get(`/bookings`, {
            params: {
                bookingCode: bookCode
            }
        });
        return {
            success: true,
            data: response.data.data,
            message: response.data.message || "Berhasil mendapatkan data booking"
        };
    }
    catch (err) {
        if (err.response?.status === 404) {
            return {
                success: false,
                data: null,
                message: "tidak ada data booking"
            };
        }

        if (err.response?.status === 400) {
            return {
                success: false,
                data: null,
                message: "Booking code tidak ditemukan"
            };
        }
        return {
            success: false,
            data: null,
            message: err.response?.data?.message || "Terjadi kesalahan, silahkan coba lagi"
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
                message: "Berhasil membuat pemesanan"
            };
        }
        else {
            return {
                success: false,
                data: null,
                message: err.response?.data?.message || "Gagal membuat pesanan"
            };
        }
    }
    catch (err) {
        return {
            success: false,
            data: null,
            message: err.response?.data?.message || "Terjadi kesalahan, silahkan coba lagi"
        };
    }
};


const CreatePaymentBooking = async (id, paymentData) => {
    console.log(id, paymentData)
    try {
        const response = await axiosInstance.post(`/bookings/${id}/payments`, paymentData);
        if (response.data.status === "Success") {
            console.log("ok")
            return {
                success: true,
                data: response.data.data,
                message: response.data.message || "Pemesanan berhasil di bayar"
            };
        }
        return {
            success: false,
            data: null,
            message: response.data.message || "Gagal melakukan pembayaran pemesanan",
        };
    }
    catch (err) {
        console.log("not")
        return {
            success: false,
            data: null,
            message: err.response?.data?.message || "Terjadi kesalahan, silahkan coba lagi"
        };
    }
};

export { GetBookings, GetBookingById, GetBookingByBookCode, CreateBooking, CreatePaymentBooking };

