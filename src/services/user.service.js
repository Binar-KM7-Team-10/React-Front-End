import { axiosInstance } from "../api/axiosInstance";

const GetUsers = async () => {};

const GetUserById = async (id) => {
  if (!id) {
    throw new Error("User ID is required");
  }

  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return {
      success: true,
      data: response.data.data,
      message: response.data.message || "User successfully retrieved",
    };
  } catch (err) {
    if (err.response?.status === 404) {
      return {
        success: false,
        data: null,
        message: "User not found",
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
      message: err.response?.data?.message || "Failed to fetch user",
    };
  }
};

const CreateUser = async () => {};

const UpdateUser = async (id, userData) => {
  if (!id || !userData) {
    throw new Error("User ID or data is missing");
  }
  try {
    const response = await axiosInstance.patch(`/users/${id}`, userData);
    return {
      success: true,
      data: response.data.data,
      message: response.data.message || "User successfully updated",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.response?.data?.message || "Failed to update user",
    };
  }
};

const DeleteUser = async (id) => {
  if (!id) {
    throw new Error("User ID is required");
  }

  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    return {
      success: true,
      message: response.data.message || "User successfully deleted",
    };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Failed to delete user",
    };
  }
};

export { GetUsers, GetUserById, CreateUser, UpdateUser, DeleteUser };
