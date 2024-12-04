import React from 'react';
import NavbarAuthentication from '../components/fragments/NavbarAuthentication';
import OrderHeaderHistory from '../components/fragments/OrderSection/OrderHeaderHistory';
import DetailCardTicket from '../components/fragments/FlightCards/DetailCardTicket';
import DetailPenerbangan from '../components/fragments/OrderCards/DetailPenerbangan';

const HistoryOrder = () => {
    const flightData = {
        date: "Maret 2025",
    };

    return (
        <div>
            <NavbarAuthentication search={false} />
            <OrderHeaderHistory />
            <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg md:flex py-8'>
                <div className='left-section w-full md:w-7/12 flex-col space-y-2'>
                    <p className="text-black text-[16px] font-bold md:px-12 px-2 lg:8">{flightData.date}</p>
                    <DetailCardTicket />
                    <DetailCardTicket />
                </div>
                
                <div className='w-full md:w-5/12 mt-8 md:mt-0'>
                    <DetailPenerbangan />
                    <div className="mt-6 flex justify-center">
                        <button className="w-full sm:w-[350px] bg-[#FF0000] text-white py-4 rounded-[12px] text-xl hover:opacity-90 transition-opacity shadow-md">
                            Lanjut Bayar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HistoryOrder;
