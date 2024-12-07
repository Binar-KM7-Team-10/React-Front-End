import { useState } from "react"

import { Login } from "../services/auth.service"

const useLogin = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({
        status: false,
        message: ""
    });
    const [success, setSuccess] = useState({
        status: false,
        message: ""
    });

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await Login({ email: email, password: password })
            console.log(response.message);
            if (response.success == true) {
                setLoading(false);
                setSuccess({
                    status: true,
                    message: response.message || "Login successfully"
                });
            }
            else {
                setLoading(false);
                setError({
                    status: true,
                    message: response.message || "An error occured"
                });
            }
        }
        catch (err) {
            setLoading(false);
            setError({
                status: true,
                message: err || "An error occured"
            });
        }
    }

    return {
        loading,
        login,
        success,
        error
    }
}

export default useLogin;

