import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

const ProtectedRoute = ({children}) => {
    const token = Cookies.get("token");

    
}

export default ProtectedRoute