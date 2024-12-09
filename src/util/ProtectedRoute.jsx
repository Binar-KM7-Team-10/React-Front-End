import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ type, children }) => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (type === "auth" && !isAuth) {
    return <Navigate to="/login" replace />;
  }

  if (type === "guest" && isAuth) {
    return <Navigate to="/" replace />;
  }

  if (type === "public") {
    return children;
  }

  return children;
};

export default ProtectedRoute;
