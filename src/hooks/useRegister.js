import { useState } from "react";
import { Register } from "../services/auth.service";
import { useRegisterEmail } from "../contexts/RegisterContext";

const useRegister = () => {

  const [loading, setLoading] = useState(false);
  const { setEmailInput } = useRegisterEmail()

  const register = async (email, password, fullName, phone) => {
    setLoading(true);
    try {
      const response = await Register({ email, password, fullName, phone });
      if (response.success === true) {
        return {
          status: "success",
          message: response.message || "Login successfully",
        };
      }
      else {
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

  const setOtp = (inputEmail, inputEmailHash) => {
    setEmailInput([inputEmail, inputEmailHash])
  }

  return {
    loading,
    register,
    setOtp,
  };
};

export default useRegister;
