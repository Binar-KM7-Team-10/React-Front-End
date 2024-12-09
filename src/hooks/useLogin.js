import { useState } from "react";
import Cookies from "js-cookie";
import { Login } from "../services/auth.service";
import { useAuth } from "../contexts/AuthContext";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setIsAuth } = useAuth(); // Mengambil setIsAuth dari AuthContext

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await Login({ email, password });
      if (response.success) {
        // Simpan token dan user di Cookies
        Cookies.set("token", response.data.accessToken);
        Cookies.set("user", JSON.stringify(response.data.user));

        // Update isAuth di AuthContext
        setIsAuth(true);

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
    } catch (err) {
      return {
        status: "error",
        message: err.message || "An error occurred",
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    login,
  };
};

export default useLogin;
