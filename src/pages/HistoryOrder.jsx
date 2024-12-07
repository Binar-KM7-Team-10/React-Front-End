import React from 'react';
import Navbar from '../components/fragments/Navbar/Navbar';
import OrderHeaderHistory from '../components/fragments/OrderSection/OrderHeaderHistory';
import DetailCardTicket from '../components/fragments/FlightCards/DetailCardTicket';
import DetailPenerbangan from '../components/fragments/OrderCards/DetailPenerbangan';

const HistoryOrder = () => {
    const flightData = {
        date: "Maret 2025",
    };

    return (
        <div className="min-h-screen flex flex-col">
        <div>
            <Navbar search={false} type={"auth"} />
            <OrderHeaderHistory />
            <div className='mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-screen-lg md:flex py-4 md:py-8 gap-6'>
                {/* Left Section */}
                <div className='flex-1 md:w-7/12 space-y-4'>
                    <p className="text-black text-base font-bold px-2 md:px-12">{flightData.date}</p>
                    <div className="space-y-4">
                        <DetailCardTicket />
                        <DetailCardTicket />
                    </div>
                </div>
                
                {/* Right Section */}
                <div className='md:w-5/12 mt-6 md:mt-0'>
                    <DetailPenerbangan />
                    <div className="mt-6 px-4 md:px-0">
                        <button className="w-full bg-[#FF0000] text-white py-3 md:py-4 rounded-xl text-lg md:text-xl hover:opacity-90 transition-opacity shadow-md">
                            Lanjut Bayar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default HistoryOrder;