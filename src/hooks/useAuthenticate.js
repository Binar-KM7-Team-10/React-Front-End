import { useState } from 'react';
import { ForgotPass, ResetPass } from '../services/auth.service';

const useAuthenticate = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (email) => {
    setLoading(true);
    setSuccess(false);
    setMessage('');

    const response = await ForgotPass(email);
    setMessage(response.message);
    setSuccess(response.success);
    setLoading(false);
  };

  const handleResetPassword = async (token, newPassword, confirmNewPassword) => {
    setLoading(true);
    setSuccess(false);
    setMessage(''); 
    try {
      const response = await ResetPass(token, newPassword, confirmNewPassword);
      setMessage(response.message); 
      setSuccess(response.success); 
    } catch (error) {
      setMessage(error.message || 'An unexpected error occurred');
      setSuccess(false);
    } finally {
      setLoading(false); 
      return true;
    }
  };

  return {
    loading,
    success,
    message,
    handleForgotPassword,
    handleResetPassword,
  };
};

export default useAuthenticate;
