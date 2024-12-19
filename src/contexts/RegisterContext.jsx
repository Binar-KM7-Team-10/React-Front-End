import { createContext, useContext, useState } from "react";

export const RegisterContext = createContext();

export const RegisterProvider = ({ children }) => {
    const [emailInput, setEmailInput] = useState([]);
    return (
        <RegisterContext.Provider value={{ emailInput, setEmailInput }}>
            {children}
        </RegisterContext.Provider>
    );
};

export const useRegisterEmail = () => useContext(RegisterContext);