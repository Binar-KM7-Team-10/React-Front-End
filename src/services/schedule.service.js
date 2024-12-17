import {axiosInstance} from "../api/axiosInstance";

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
            };
        }
        return {
            success: false,
            message: response.data.message || "Failed to fetch cars",
        };
    }
    catch (error) {
        return {
            success: false,
            message: error.response?.data?.message || "An error occurred",
        };
    }
}

const GetScheduleById = async () => {

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