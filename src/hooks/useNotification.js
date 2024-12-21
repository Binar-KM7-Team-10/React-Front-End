import { useState, useEffect, useCallback } from "react";
import { GetNotificationById, updateNotification } from "../services/notification.service";
import { useAuth } from "../contexts/AuthContext";

const useNotification = () => {

  const { user } = useAuth();

  const [notificationData, setNotificationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNotifications = async () => {
    if (user && user.id) {
      setLoading(true);
      try {
        const response = await GetNotificationById(user.id);
        if (response.success) {
          setNotificationData(response.data);
          setError(null);
        } else {
          setError(response.message);
          setNotificationData(null);
        }
      }
      catch (err) {
        setError(err.message || "Failed to fetch notifications");
        setNotificationData(null);
      } finally {
        setLoading(false);
      }
    }
  };

  const updateNotificationData = useCallback(async (id) => {
    setLoading(true);
    try {
      const response = await updateNotification(id);
      if (response.success) {
        fetchNotifications()
        setError(null);
      } else {
        setError(response.message);
      }
    }
    catch (err) {
      setError(err.message || "Failed to fetch notifications");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [user]);

  const refreshNotifications = () => {
    fetchNotifications();
  };

  return {
    notificationData,
    updateNotificationData,
    loading,
    error,
    refreshNotifications,
  };
};

export default useNotification;
