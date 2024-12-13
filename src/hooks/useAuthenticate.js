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

  const handleResetPassword = async (token, newPassword) => {
    setLoading(true);
    setSuccess(false);
    setMessage('');

    const response = await ResetPass(token, newPassword);
    setMessage(response.message);
    setSuccess(response.success);
    setLoading(false);
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
