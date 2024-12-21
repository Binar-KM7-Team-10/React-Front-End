import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../../api/axiosInstance";
import { Bell } from "lucide-react";
import NotificationModals from "../../elements/Modals/NotificationModal";
import { useAuth } from "../../../contexts/AuthContext";

const NotificationList = () => {
  const { user } = useAuth();
  const [notificationData, setNotificationData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNotifications = async () => {
      if (user && user.id) {
        setLoading(true);
        try {
          const response = await axiosInstance.get(
            `/notifications?userId=${user.id}`
          );
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

    fetchNotifications();
  }, []);

  const [selectedNotification, setSelectedNotification] = useState(null);
  const handleClick = async (notification) => {
    setSelectedNotification(notification);

    if (!notification.readStatus) {
      try {
        await axiosInstance.patch(`/notifications/${notification.id}`, {
          readStatus: false,
        });

        setNotificationData((prevData) =>
          prevData.map((item) =>
            item.id === notification.id ? { ...item, readStatus: false } : item
          )
        );
      } catch (error) {
        console.error("Failed to update notification read status", error);
      }
    }
  };
  const closeModal = () => {
    setSelectedNotification(null);
  };

  return (
    <div className="mx-auto p-4 max-w-screen-lg md:px-20 px-4">
      <div className="space-y-4">
        {notificationData.map((notification) => (
          <div
            key={notification.id}
            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-sm cursor-pointer"
            onClick={() => handleClick(notification)}
          >
            <div className="flex-shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  notification.title === "Promo Khusus!"
                    ? "bg-purple-100"
                    : "bg-blue-100"
                }`}
              >
                <Bell
                  size={16}
                  className={`${
                    notification.title === "Promo Khusus!"
                      ? "text-purple-500"
                      : "text-blue-500"
                  }`}
                />
              </div>
            </div>

            <div className="flex-grow">
              <div className="flex justify-between items-start flex-col sm:flex-row">
                <div className="mb-2 sm:mb-0">
                  <p className="text-gray-500 text-sm">{notification.title}</p>
                  <h3 className="font-medium mt-1">{notification.message}</h3>
                  {/* <p className="text-gray-600 text-sm mt-1">
                    {notification.title}
                  </p> */}
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <span className="text-gray-400 text-sm">
                    {notification.createdAt}
                  </span>
                  {notification.readStatus && (
                    <div className="w-2 h-2 rounded-full bg-[#73CA5C] ml-2"></div>
                  )}
                  {!notification.readStatus && (
                    <div className="w-2 h-2 rounded-full bg-[#FA2C5A] ml-2"></div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedNotification && (
        <NotificationModals
          notification={selectedNotification}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default NotificationList;
