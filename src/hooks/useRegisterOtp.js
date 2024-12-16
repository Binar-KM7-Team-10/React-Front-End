import { useState } from "react";
import Cookies from "js-cookie";
import { RegisterOtp } from "../services/auth.service";
import { useRegisterEmail } from "../contexts/RegisterContext";
import { useAuth } from "../contexts/AuthContext";

const useRegisterOtp = () => {
    const [loading, setLoading] = useState(false);
    const { emailInput } = useRegisterEmail();
    const { setIsAuth } = useAuth();

    const registerOtp = async (email, otp) => {
        setLoading(true);
        try {
            const response = await RegisterOtp({ email, otp });
            if (response.success) {
                // Simpan token dan user di Cookies
                Cookies.set("token", response.data.accessToken);
                Cookies.set("user", JSON.stringify(response.data.user));
                console.log(JSON.stringify(response.data.user));
                // Update isAuth di AuthContext
                setTimeout(() => {
                    setIsAuth(true);
                }, 3000);

                return {
                    status: "success",
                    message: response.message || "Register successfully",
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
    }

    return {
        registerOtp,
        emailInput,
        loading,
    }
}

export default useRegisterOtp;