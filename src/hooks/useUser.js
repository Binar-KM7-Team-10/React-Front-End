import { useState, useEffect } from "react";
import { GetUserById } from "../services/user.service";
import { useAuth } from "../contexts/AuthContext";

const useUser = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    if (user && user.id) {
      setLoading(true);
      try {
        const response = await GetUserById(user.id);
        if (response.success) {
          setUserData(response.data);
          setError(null);
        } else {
          setError(response.message);
          setUserData(null);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch user");
        setUserData(null);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, [user]);

  const refreshUser = () => {
    fetchUser();
  };

  return {
    userData,
    loading,
    error,
    refreshUser,
  };
};

export default useUser;
