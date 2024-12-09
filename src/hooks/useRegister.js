import { useState } from "react";
import { Register } from "../services/auth.service";
// import { useNavigate } from "react-router-dom";

const useRegister = () => {

  // const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const register = async (email, password, name, phone) => {
    setLoading(true);
    try {
      const response = await Register({ email, password, name, phone });
      if (response.success === true) {
        return {
          status: "success",
          message: response.message || "Login successfully",
        };
      } else {
        return {
          status: "error",
          message: response.message || "An error occurred",
        };
      }
    } 
    catch (err) {
      return {
        status: "error",
        message: err.message || "An error occurred",
      }; 
    }
    finally {
      setLoading(false);
    }
  };

  return {
    loading,
    register,
    success,
    error,
  };
};

export default useRegister;
