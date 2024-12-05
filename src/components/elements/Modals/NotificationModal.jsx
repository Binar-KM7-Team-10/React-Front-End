// NotificationModal.js
import React from 'react';

const NotificationModal = ({ notification, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full sm:w-auto sm:max-w-md mx-4 max-h-[90vh] overflow-y-auto">
        <h3 className="text-xl font-semibold">{notification.title}</h3>
        <p className="text-sm text-gray-500 mt-2">{notification.date}</p>
        <div className="mt-4">
          <p>{notification.content}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default NotificationModal;
