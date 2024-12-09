import { useState } from "react";
import Cookies from "js-cookie";
import { Logout } from "../services/auth.service"
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const logout = async () => {
        try {
            const response = await Logout();   
            if (response.success) {
                Cookies.remove("token");
                Cookies.remove("user");
                navigate("/");
                return {
                    status: "success",
                    message: response.message || "Logout successfully",
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
        logout
    }
}

export default useLogout