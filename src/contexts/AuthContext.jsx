import React, { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = () => {
      const token = Cookies.get("token");
      const userCookie = Cookies.get("user");

      if (token && userCookie) {
        try {
          const decodedToken = jwtDecode(token);
          if (decodedToken.exp * 1000 > Date.now()) {
            setIsAuth(true);
            setUser(JSON.parse(userCookie));
          } else {
            Cookies.remove("token");
            Cookies.remove("user");
            setIsAuth(false);
            setUser(null);
          }
        } catch (error) {
          console.error("Invalid token:", error);
          Cookies.remove("token");
          Cookies.remove("user");
          setIsAuth(false);
          setUser(null);
        }
      } else {
        setIsAuth(false);
        setUser(null);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, isLoading, user, setIsAuth, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);