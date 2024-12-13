import { useState } from "react";
import { UpdateUser } from "../services/user.service"; 
import { useAuth } from "../contexts/AuthContext";

const useUpdateUser = () => {
  const { user } = useAuth(); 
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  
  const [updatedUser, setUpdatedUser] = useState(null);  
  const [success, setSuccess] = useState(false);  

  const updateUser = async (userData) => {
    if (!user || !user.id) {
      setError("User is not authenticated or ID is missing");
      return;
    }

    setLoading(true);  
    setError(null);  
    setSuccess(false);  

    try {
     
      const response = await UpdateUser(user.id, userData);

      if (response.success) {
        setUpdatedUser(response.data);  
        setSuccess(true); 
        setError(null);  
      } else {
        setError(response.message || "Failed to update user");
        setUpdatedUser(null);  
      }
    } catch (err) {
      setError(err.message || "An unexpected error occurred");
      setUpdatedUser(null);
    } finally {
      setLoading(false); 
    }
  };

  return {
    loading,
    error,
    updatedUser,
    success,
    updateUser,
  };
};

export default useUpdateUser;
