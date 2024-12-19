import { useState, useEffect } from "react";
import { GetCities } from "../services/cities.service";

const useFetchCities = () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCity = async () => {
      setLoading(true);
      try {
        const response = await GetCities();
        if (response.success) {
          setCities(response.data.cities);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCity();
  }, []);

  return { cities, loading, error };
};

export default useFetchCities;
