import { axiosInstance } from "../api/axiosInstance";

const GetCities = async () => {
    try {
        const response = await axiosInstance.get("/cities");
        if (response.data.status == "Success") {
            return {
                success: true,
                data: response.data.data,
            };
        }
        return {
            success: false,
            message: response.data.message || "Failed to fetch cars",
        };
    } 
    catch (err) {
        return {
            success: false,
            message: err.response?.data?.message || "An error occurred",
        };
    }
}

export {
    GetCities
}