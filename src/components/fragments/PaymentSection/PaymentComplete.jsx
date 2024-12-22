import React from "react";
import { Link, useParams } from "react-router-dom";
import image from "../../../assets/Images/PaymentSuccess.png";
import Loading from "../../elements/Loading/Loading";

const PaymentComplete = () => {
  const { bookCode } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const handleRedirect = () => {
    setIsLoading(true);
    setTimeout(() => {}, 800);
  };

  return (
    <div className="bg-gray-50 font-sans">
      <div className="w-full">
        <Navbar search={true} type={"auth"} />
        <PaymentHeader
          inputText="Terimakasih atas pembayaran transaksi"
          alertType="success"
          activeStep={{
            text1: true,
            text2: true,
            text3: true,
          }}
        />
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <Loading />
          </div>
        ) : (
          <header className="grid min-h-full place-items-center bg-white px-4 py-16 sm:py-24 md:py-32">
            <div className="text-center w-full max-w-[600px] mx-auto">
              <div className="relative w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] mx-auto pt-4">
                <img
                  src={image}
                  alt="Banner"
                  className="w-full h-full rounded-t-lg"
                  style={{ zIndex: 2 }}
                />
              </div>
              <p className="text-base font-semibold text-purple-600 mt-6">
                Selamat!
              </p>
              <p className="font-bold text-pretty text-lg sm:text-xl">
                Transaksi Pembayaran Tiket sukses!
              </p>
              <div className="mt-10 flex flex-col items-center gap-4">
                <Link
                  to={`/print-ticket/${bookCode}`}
                  className="w-full max-w-[347px] px-6 py-3 rounded-[12px] bg-purple-600 hover:bg-purple-800 text-md font-semibold text-white shadow-sm transition focus:outline-none"
                >
                  Terbitkan Tiket
                </Link>
                <button
                  onClick={handleRedirect}
                  className="w-full max-w-[347px] px-6 py-3 rounded-[12px] bg-purple-600 hover:bg-purple-800 ] text-md font-semibold text-white shadow-sm transition focus:outline-none"
                >
                  Cari Penerbangan Lain
                </button>
              </div>
            </div>
          </header>
        )}
      </div>
    </div>
  );
};

export default PaymentComplete;
