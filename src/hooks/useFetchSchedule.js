import { useState, useCallback } from "react";
import { GetSchedules } from "../services/schedule.service";

const useFetchSchedule = () => {
    const [loading, setLoading] = useState(false);
    const [schedule, setSchedule] = useState({});
    const [error, setError] = useState({ error: false, message: "" });

    const onSubmitSchedule = useCallback(async (data) => {
        // console.log(data)
        setLoading(true);

        if (!data || typeof data !== "object") {
            setLoading(false);
            setError({ error: true, message: "Invalid data for schedule query" });
            return;
        }

        if(Object.keys(data).length === 0){
            setLoading(false);
            return
        }

        try {
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
            };

            const response = await GetSchedules(queryParam);
            if (response.success && response.data) {
                if (response.data.length != 0) {                 
                    setSchedule(response.data.schedule.outbound);
                }
                else{
                    setSchedule([])
                }
                setError({ error: false, message: "" });
            } 
            else {
                setError({ error: true, message: response.message || "An error occurred" });
            }
        } catch (err) {
            setError({ error: true, message: err.message || "An error occurred" });
        } finally {
            setLoading(false);
        }
    }, []);

    return {
        schedule,
        error,
        loading,
        onSubmitSchedule,
    };
};

export default useFetchSchedule;
