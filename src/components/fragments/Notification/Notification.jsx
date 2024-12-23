import React, { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import useNotification from "../../../hooks/useNotification";
import NotificationModals from "../../elements/Modals/NotificationModal";

const NotificationList = () => {
  const { notificationData, loading, updateNotificationData, error, refreshNotifications } = useNotification();

  const dateFunc = (isoDate) => {
    const date = new Date(isoDate);

    const options = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    };
    let formattedDate = date.toLocaleString('id-ID', options);
    formattedDate = formattedDate.replace(" pukul", ""); 
    return formattedDate
  }

  const [selectedNotification, setSelectedNotification] = useState(null);
  const handleClick = async (notification) => {
    setSelectedNotification(notification);
    if (!notification.readStatus) {
      await updateNotificationData(notification.id)

    }
  };
  const closeModal = () => {
    setSelectedNotification(null);
  };

  return (
    <div className="mx-auto p-4 max-w-screen-lg md:px-20 px-4">
      <div className="space-y-4">
        {!loading && notificationData.map((notification) => (
          <div
            key={notification.id}
            className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4 bg-white rounded-lg shadow-sm cursor-pointer"
            onClick={() => handleClick(notification)}
          >
            <div className="flex-shrink-0">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${notification.title === "Promo Khusus!"
                    ? "bg-purple-100"
                    : "bg-blue-100"
                  }`}
              >
                <Bell
                  size={16}
                  className={`${notification.title === "Promo Khusus!"
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
                </div>
                <div className="flex items-center mt-2 sm:mt-0">
                  <span className="text-gray-400 text-sm">
                    {dateFunc(notification.createdAt)}
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
