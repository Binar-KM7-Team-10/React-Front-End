import { useState, useEffect } from "react";
import { GetNotificationById } from "../services/notification.service";
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
        if (!response?.success) {
          setNotificationData(response.data.data);
          setError(null);
        } else {
          setError(response.message);
          setNotificationData(null);
        }
      } catch (err) {
        setError(err.message || "Failed to fetch notifications");
        setNotificationData(null);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [user]);

  const refreshNotifications = () => {
    fetchNotifications();
  };

  return {
    notificationData,
    loading,
    error,
    refreshNotifications,
  };
};

export default useNotification;
