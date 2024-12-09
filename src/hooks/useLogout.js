import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Logout } from "../services/auth.service"
import { useAuth } from "../contexts/AuthContext";

const useLogout = () => {

    const navigate = useNavigate()
    const { setIsAuth } = useAuth();
    const [loading, setLoading] = useState(false);

    const logout = async () => {
        setLoading(true);
        try {
            const response = await Logout();   
            if (response.success) {
                Cookies.remove("token");
                Cookies.remove("user");
                setIsAuth(false);
                navigate("/");
                // return {
                //     status: "success",
                //     message: response.message || "Logout successfully",
                // };
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