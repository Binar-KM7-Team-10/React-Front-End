import { useState } from "react";
import { Register } from "../services/auth.service";
import { useNavigate } from "react-router-dom";

const useRegister = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    status: false,
    message: "",
  });
  const [success, setSuccess] = useState({
    status: false,
    message: "",
  });

  const register = async (email, password, name, phone) => {
    setLoading(true);
    setError({ status: false, message: "" });
    setSuccess({ status: false, message: "" });

    try {
      const response = await Register({ email, password, name, phone });
      if (response.success === true) {
        setSuccess({
          status: true,
          message: response.message || "Registration successful",
        });
        setLoading(false);
        navigate("/login");
      } else {
        setError({
          status: true,
          message: response.message || "An error occurred",
        });
        setLoading(false);
      }
    } catch (err) {
      setError({
        status: true,
        message: err?.response?.data?.message || err.message || "An error occurred",
      });
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
