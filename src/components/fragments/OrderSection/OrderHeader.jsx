import React, { useState, useEffect } from "react";
import AlertCheckout from "../../elements/Alert/AlertCheckout.jsx";
import OrderBreadcrumb from "../../elements/Breadcrumbs/OrderBreadcrumb";
import { useSearchContext } from "../../../contexts/searchFlightContext";

const OrderHeader = () => {
  const { getSearchParamsFromCookies } = useSearchContext();

  const [timeLeft, setTimeLeft] = useState(0);
  const searchCookies = getSearchParamsFromCookies()

  const [isExpireDate, setIsExpireDate] = useState(false)



  useEffect(() => {

    const targetDate = new Date(`${searchCookies.dpDate}T${searchCookies.dpTime || "00:00:00"}`);
    targetDate.setHours(targetDate.getHours() - 2);
    const now = new Date();

    if (targetDate <= now) {
      setIsExpireDate(true);
    }

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      return Math.max(Math.floor(difference / 1000), 0);
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        if (newTime <= 0) {
          clearInterval(timer);
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [searchCookies.dpDate, searchCookies.dpTime]);

  const formatTime = (time) => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    if (days > 0) {
      return `${days} hari ${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
        {
          isExpireDate ?
            <AlertCheckout text={`Pemesanan Melebihi jadwal`} type={"danger"} />
            : <AlertCheckout text={`Selesaikan dalam ${formatTime(timeLeft)}`} type={"danger"} />
        }
      </div>
    </div>
  );
};

export default OrderHeader;
