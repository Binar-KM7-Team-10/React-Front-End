import { useState } from "react";
import Cookies from "js-cookie";
import { RegisterOtp, RegisterOtpResend } from "../services/auth.service";
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

                Cookies.set("token", response.data.accessToken);
                Cookies.set("user", JSON.stringify(response.data.user));
                console.log(JSON.stringify(response.data.user));

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

    const otpResend = async (email) => {
        setLoading(true);
        try {
            const response = await RegisterOtpResend(email);
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
        catch (error) {
            return {
                status: "error",
                message: err.message || "An error occurred",
            };
        }
        finally {
            setLoading(false);
        }
    }

    return {
        registerOtp,
        otpResend,
        emailInput,
        loading,
    }
}

export default useRegisterOtp;