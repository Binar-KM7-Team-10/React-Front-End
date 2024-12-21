import { axiosInstance } from "../api/axiosInstance";

const GetNotificationById = async (id) => {
  if (!id) {
    throw new Error("User ID is required");
  }

  try {
    const response = await axiosInstance.get(`/notifications?userId=${id}`);
    return {
      success: true,
      data: response.data.data,
      message: response.data.message || "Notification successfully retrieved",
    };
  } catch (err) {
    if (err.response?.status === 404) {
      return {
        success: false,
        data: null,
        message: "Notification not found",
      };
    }

    if (err.response?.status === 400) {
      return {
        success: false,
        data: null,
        message: "Invalid user ID",
      };
    }
    return {
      success: false,
      data: null,
      message: err.response?.data?.message || "Failed to fetch Notification",
    };
  }
};

export { GetNotificationById };
