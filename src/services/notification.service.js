import { data } from "react-router-dom";
import { axiosInstance } from "../api/axiosInstance";

const GetNotificationById = async (id) => {
  if (!id) {
    throw new Error("User ID is required");
  }

  try {
    const response = await axiosInstance.get(`/notifications`, {
      params: {
        userId: id
      }
    });

    if (response.data.status == "Success") {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    }
    return {
      success: false,
      data: null,
      message: response.data.message || "Failed to fetch cars",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: error.response?.data?.message || "An error occurred",
    };
  }
};

const updateNotification = async (id) => {
  if (!id) {
    throw new Error("User ID is required");
  }

  try {
    const response = await axiosInstance.patch(`/notifications/${id}`, {
      "readStatus": true
    });

    if (response.data.status == "Success") {
      return {
        success: true,
        data: response.data.data,
        message: response.data.message
      };
    }
    return {
      success: false,
      data: null,
      message: response.data.message || "Failed to fetch cars",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: error.response?.data?.message || "An error occurred",
    };
  }

}

export { GetNotificationById, updateNotification };
