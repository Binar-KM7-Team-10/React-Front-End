import { axiosInstance } from "../api/axiosInstance";

const GetUsers = async () => {};

const GetUserById = async (id) => {
  if (!id) {
    throw new Error("User ID diperlukan");
  }

  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return {
      success: true,
      data: response.data.data,
      message: response.data.message || "Berhasil mendapatkan data pengguna",
    };
  } catch (err) {
    if (err.response?.status === 404) {
      return {
        success: false,
        data: null,
        message: "Pengguna tidak ditemukan",
      };
    }

    if (err.response?.status === 400) {
      return {
        success: false,
        data: null,
        message: "user id tidak valid",
      };
    }
    return {
      success: false,
      data: null,
      message: err.response?.data?.message || "Gagal mendapatkan data pengguna",
    };
  }
};

const CreateUser = async () => {};

const UpdateUser = async (id, userData) => {
  if (!id || !userData) {
    throw new Error("User ID atau data tidak ditemukan");
  }
  try {
    const response = await axiosInstance.patch(`/users/${id}`, userData);
    return {
      success: true,
      data: response.data.data,
      message: response.data.message || "Berhasil mengubah data pengguna",
    };
  } catch (err) {
    return {
      success: false,
      data: null,
      message: err.response?.data?.message || "Gagal mengubah data pengguna",
    };
  }
};

const DeleteUser = async (id) => {
  if (!id) {
    throw new Error("User ID diperlukan");
  }

  try {
    const response = await axiosInstance.delete(`/users/${id}`);
    return {
      success: true,
      message: response.data.message || "Berhasil menghapus data pengguna",
    };
  } catch (err) {
    return {
      success: false,
      message: err.response?.data?.message || "Gagal menghapus data pengguna",
    };
  }
};

export { GetUsers, GetUserById, CreateUser, UpdateUser, DeleteUser };
