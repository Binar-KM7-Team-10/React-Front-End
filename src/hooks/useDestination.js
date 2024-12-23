import { useState, useEffect } from "react";
import { GetDestination } from "../services/destination.service";

const useFlightDeals = (page, continent) => {
  const [deals, setDeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    const getDeals = async () => {
      try {
        setLoading(true);
        const response = await GetDestination(page, continent);
        setDeals(response.data.cards); 
        setPagination(response.pagination);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch flight deals");
        setLoading(false);
      }
    };

    getDeals();
  }, [page, continent]); 



  return { deals, loading, error, pagination };
};

export default useFlightDeals;
