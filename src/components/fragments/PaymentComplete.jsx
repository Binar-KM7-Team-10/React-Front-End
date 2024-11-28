import React from "react";
import image from "../../assets/Images/PaymentSuccess.png";

const PaymentComplete = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 p-2 md:p-4 font-sans md:px-40 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 w-full">
          <div className="text-center">
            <div className="relative w-[204px] h-[208px] ms-24 pt-4">
              <img
                src={image}
                alt="Banner"
                className="w-full h-full rounded-t-lg"
                style={{ zIndex: 2 }}
              />
            </div>
            <p className="text-base font-semibold text-purple-600">Selamat!</p>
            <p className=" font-bold text-pretty text-lg">
              Transaksi Pembayaran Tiket sukses!
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-y-4">
              <button className="w-[375px] rounded-md bg-[#7126B5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#D0B7E6] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7126B5]">
                Terbitkan Tiket
              </button>

              <button className="w-[375px] rounded-md bg-[#7126B5] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#D0B7E6] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7126B5]">
                Cari Penerbangan Lain
              </button>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default PaymentComplete;
