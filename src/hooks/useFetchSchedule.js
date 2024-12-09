import { useState, useEffect } from "react";
import { GetSchedules } from "../services/schedule.service";
import { useNavigate } from "react-router-dom";

const useFetchSchedule = () => {

    const [loading, setLoading] = useState(false);
    const { schedule, setSchedule } = useState({})
    const { error, setError } = useState({ error: false, message: "" })

    const onSubmitSchedule = async (data) => {
        setLoading(true)
        const queryParam = {
            dpCity: data.dpCity,
            arCity: data.arCity,
            dpDate: data.dpDate,
            retDate: data.retDate,
            psg: data.psg,
            seatClass: data.seatClass,
            minPrice: data.minPrice,
            sort: data.sort,
            limit: data.limit,
            offset: data.offset,
            facility: data.facility,
        }

        try {
            const response = await GetSchedules(queryParam)
            if (response.success == true && response.data) {
                setLoading(false)
                setSchedule(response.data)
                setError({
                    error: false,
                    message: ""
                })
            }
            else {
                setLoading(false)
                setSchedule({})
                setError({
                    error: true,
                    message: response.message || "An error occured"
                })
            }
        }
        catch (error) {
            setLoading(false)
            setSchedule({})
            setError({
                error: true,
                message: "An error occured"
            })
        }
    }

    return {
        schedule,
        error,
        loading,
        onSubmitSchedule,
    }
}

export default useFetchSchedule