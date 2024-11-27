import React from "react";
import { useState, useEffect } from "react";
import AlertCheckout from "../alert/AlertCheckout";
import OrderBreadcrumb from "../Breadcrumbs/OrderBreadcrumb";

const OrderHeader = () => {
  const [timeLeft, setTimeLeft] = useState(900);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="shadow-md py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <OrderBreadcrumb
          text1={"Isi Data Diri"}
          text2={"Bayar"}
          text3={"Selesai"}
          active={"Isi Data Diri"}
        />
        <AlertCheckout
          text={`Selesaikan dalam ${formatTime(timeLeft)}`}
          type={"danger"}
        />
      </div>
    </div>
  );
};

export default OrderHeader;
