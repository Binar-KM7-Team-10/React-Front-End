import { axiosInstance } from "../api/axiosInstance";

const GetSchedules = async (params) => {
    try {
        const response = await axiosInstance.get("/schedules", {
            params: {
                dpCity: params.dpCity,
                arCity: params.arCity,
                dpDate: params.dpDate,
                retDate: params.retDate,
                psg: params.psg,
                seatClass: params.seatClass,
                minPrice: params.minPrice,
                sort: params.sort,
                limit: params.limit,
                offset: params.offset,
                facility: params.facility,
            }
        })
        if (response.data.status == "Success") {
            return {
                success: true,
                data: response.data.data,
                message: response.data.message || "Berhasil mendapatkan data jadwal"
            };
        }
        return {
            success: false,
            message: response.data.message || "Gagal mendapatkan data jadwal",
        };
    }
    catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "Terjadi kesalahan, silahkan coba lagi",
        };
    }
}

const GetScheduleById = async (id) => {
    console.log(id)
    try {
        const response = await axiosInstance.get(`/schedules/${id}`);
        return {
            success: true,
            data: response.data.data,
            message: response.data.message || "Berhasil mendapatkan data jadwal"
        };
    } 
    catch (err) {
        if (err.response?.status === 404) {
            return {
                success: false,
                data: null,
                message: "Jadwal tidak ditemukan"
            };
        }

        if (err.response?.status === 400) {
            return {
                success: false,
                data: null,
                message: "Booking ID tidak valid"
            };
        }
        return {
            success: false,
            data: null,
            message: err.response?.data?.message || "Gagal mendapatkan data jadwal"
        };
    }
}

const CreateSchedule = async () => {

}

const UpdateSchedule = async () => {

}

const DeleteSchedule = async () => {

}

export {
    GetSchedules,
    GetScheduleById,
    CreateSchedule,
    UpdateSchedule,
    DeleteSchedule
}