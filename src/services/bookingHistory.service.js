import { axiosInstance } from '../api/axiosInstance';

const getBookingHistory = async (bookings) => {
    try {
        const response = await axiosInstance.get(`/bookings/${bookings}`);
        return response.data;
    } catch (error) {
        throw error; 
    }
};

export { getBookingHistory };