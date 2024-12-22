import React, { useEffect, useState } from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import OrderHeaderHistory from "../components/fragments/OrderSection/OrderHeaderHistory";
import Notification from "../components/fragments/Notification/Notification";
import Loading from "../components/elements/Loading/Loading";

const NotificationPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar search={false} type="auth" />
      <OrderHeaderHistory filter={true} text={"Notifikasi"} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-lg py-4">
          <Notification />
        </div>
      )}
    </div>
  );
};

export default NotificationPage;
