import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authParams, setAuthParams] = useState({});
    return (
        <AuthContext.Provider value={{ authParams, setAuthParams }}>
            {children}
        </AuthContext.Provider>
    );
};