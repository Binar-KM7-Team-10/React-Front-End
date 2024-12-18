import { useState } from "react";
import { GetCities } from "../services/cities.service";

const useFetchCities = () => {
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchCity = async () => {
        setLoading(true);
        try {
            const response = await GetCities();
            if (response.success) {
                setCities(response.data)
            }
        }
        catch (err) {
            //
        }
        finally {
            setLoading(false)
        }
    }

    fetchCity();

    return { cities, loading }
}

export default useFetchCities