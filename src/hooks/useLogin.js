import { useState } from "react"
import Cookies from "js-cookie"
import { Login } from "../services/auth.service"

const useLogin = () => {
    const [loading, setLoading] = useState(false);

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await Login({ email: email, password: password });
            if (response.success) {
                Cookies.set("token", response.data.accessToken);
                Cookies.set("user", response.data.user);
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

