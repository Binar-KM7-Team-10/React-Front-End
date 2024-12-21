import React from "react";
import { useState, useEffect } from "react";
import AlertCheckout from "../../elements/Alert/AlertCheckout.jsx";
import OrderBreadcrumb from "../../elements/Breadcrumbs/OrderBreadcrumb";

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
      <div className="mx-4 sm:mx-8 lg:mx-20 xl:mx-40 2xl:mx-60 px-4 sm:px-8 lg:px-20 xl:px-40 2xl:px-60">
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
