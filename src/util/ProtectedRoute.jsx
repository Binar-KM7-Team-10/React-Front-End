import React, { useEffect, useState, cloneElement } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ type, children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        console.log(decodedToken)
        if (decodedToken.exp * 1000 > Date.now()) {
          console.log("ok")
          setIsAuth(true);
        } else {
          Cookies.remove('token');
          setIsAuth(false);
        }
      } catch (error) {
        Cookies.remove('token');
        setIsAuth(false);
      }
    } else {
      setIsAuth(false);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    // Tampilkan spinner/loading sementara
    return <div>Loading...</div>;
  }

  if (type === 'auth' && !isAuth) {
    // Redirect ke halaman login jika tidak autentikasi
    return <Navigate to="/login" replace />;
  }

  if (type === 'public' && isAuth) {
    // Redirect ke halaman utama jika sudah autentikasi
    return <Navigate to="/" replace />;
  }

  // Kirimkan isAuth ke children
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return cloneElement(child, { isAuth });
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};

export default ProtectedRoute;
