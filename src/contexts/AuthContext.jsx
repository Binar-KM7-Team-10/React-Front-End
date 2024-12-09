import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuth = () => {
            const token = Cookies.get("token");
            if (token) {
                try {
                    const decodedToken = jwtDecode(token);
                    if (decodedToken.exp * 1000 > Date.now()) {
                        setIsAuth(true);
                    } else {
                        Cookies.remove("token");
                        setIsAuth(false);
                    }
                } catch (error) {
                    console.error("Invalid token:", error);
                    Cookies.remove("token");
                    setIsAuth(false);
                }
            } else {
                setIsAuth(false);
            }
            setIsLoading(false);
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, isLoading, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
