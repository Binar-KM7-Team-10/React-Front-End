import { axiosInstance } from "../api/axiosInstance";

const GetDestination = async (page = 1, continent = "All") => {
  try {
    const response = await axiosInstance.get("/homepage", {
      params: {
        page,
        continent,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Gagal mendapatkan data tujuan");
  }
};

export { GetDestination };
