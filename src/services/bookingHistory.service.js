import { axiosInstance } from '../api/axiosInstance';

const getBookingHistory = async (booking) => {
    try {
        const response = await axiosInstance.get(`/bookings/${booking}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
};

export { getBookingHistory };