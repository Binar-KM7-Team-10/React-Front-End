import React, { useEffect, useState } from "react";
import PaymentBreadcrumb from "../../elements/Breadcrumbs/PaymentBreadCrumbs.jsx";
import AlertCheckout from "../../elements/Alert/AlertCheckout.jsx";
import { useSearchContext } from "../../../contexts/searchFlightContext";

const PaymentHeader = ({ inputText, alertType, activeStep }) => {
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
      setisAvailable(false);
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
    <div className="shadow-md py-10 relative">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <PaymentBreadcrumb
          text1={"Isi Data Diri"}
          text2={"Bayar"}
          text3={"Selesai"}
          active={activeStep}
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

export default PaymentHeader;
