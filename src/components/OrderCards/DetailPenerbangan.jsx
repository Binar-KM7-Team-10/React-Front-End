// import React from 'react';
// import { CreditCard, ChevronDown, ChevronUp, Plane } from "lucide-react";

// const DetailPenerbangan = () => {
//     const FLIGHT_DATA = {
//         bookingCode: "6723y2GHK",
//         departure: {
//             time: "07:00",
//             date: "3 Maret 2023",
//             location: "Soekarno Hatta - Terminal 1A Domestik",
//         },
//         arrival: {
//             time: "11:00",
//             date: "3 Maret 2023",
//             location: "Melbourne International Airport",
//         },
//         flight: {
//             airline: "Jet Air",
//             class: "Economy",
//             code: "JT - 203",
//             info: {
//                 baggage: "20 kg",
//                 cabinBaggage: "7 kg",
//                 entertainment: "In Flight Entertainment",
//             },
//         },
//         price: {
//             adults: {
//                 count: 2,
//                 price: 9550000,
//             },
//             baby: {
//                 count: 1,
//                 price: 0,
//             },
//             tax: 300000,
//         },
//     };
//     return (
//         <div className="flex flex-col w-full lg:w-96">
//             <div className="bg-white p-5 rounded shadow-sm">
//                 <div className="flex justify-between mb-4">
//                     <span className="text-gray-600">Booking Code:</span>
//                     <span className="text-purple-600 font-semibold">
//                         {FLIGHT_DATA.bookingCode}
//                     </span>
//                 </div>
//                 <div className="mb-6">
//                     <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">
//                             {FLIGHT_DATA.departure.time}
//                         </span>
//                         <span className="text-purple-600">Keberangkatan</span>
//                     </div>
//                     <div className="text-sm">{FLIGHT_DATA.departure.date}</div>
//                     <div className="font-medium">
//                         {FLIGHT_DATA.departure.location}
//                     </div>
//                 </div>
//                 <div className="mb-6">
//                     <div className="font-medium">
//                         {FLIGHT_DATA.flight.airline} - {FLIGHT_DATA.flight.class}
//                     </div>
//                     <div className="text-gray-600">{FLIGHT_DATA.flight.code}</div>
//                     <div className="mt-2">
//                         <div className="flex items-center gap-2 text-sm text-gray-600">
//                             <Plane size={16} className="text-yellow-500" />
//                             <span>Informasi:</span>
//                         </div>
//                         <ul className="text-sm text-gray-600 ml-6">
//                             <li>Baggage {FLIGHT_DATA.flight.info.baggage}</li>
//                             <li>
//                                 Cabin baggage {FLIGHT_DATA.flight.info.cabinBaggage}
//                             </li>
//                             <li>{FLIGHT_DATA.flight.info.entertainment}</li>
//                         </ul>
//                     </div>
//                 </div>
//                 <div className="mb-6">
//                     <div className="flex justify-between text-sm">
//                         <span className="text-gray-600">
//                             {FLIGHT_DATA.arrival.time}
//                         </span>
//                         <span className="text-purple-600">Kedatangan</span>
//                     </div>
//                     <div className="text-sm">{FLIGHT_DATA.arrival.date}</div>
//                     <div className="font-medium">
//                         {FLIGHT_DATA.arrival.location}
//                     </div>
//                 </div>
//                 <div className="border-t pt-4">
//                     <h3 className="font-medium mb-2">Rincian Harga</h3>
//                     <div className="space-y-2">
//                         <div className="flex justify-between text-sm">
//                             <span>{FLIGHT_DATA.price.adults.count} Adults</span>
//                             <span>
//                                 IDR {FLIGHT_DATA.price.adults.price.toLocaleString()}
//                             </span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                             <span>{FLIGHT_DATA.price.baby.count} Baby</span>
//                             <span>IDR {FLIGHT_DATA.price.baby.price}</span>
//                         </div>
//                         <div className="flex justify-between text-sm">
//                             <span>Tax</span>
//                             <span>IDR {FLIGHT_DATA.price.tax.toLocaleString()}</span>
//                         </div>
//                         <div className="flex justify-between font-semibold text-purple-600 pt-2 border-t">
//                             <span>Total</span>
//                             {/* <span>IDR {calculateTotal().toLocaleString()}</span> */}
//                             <span>IDR 9.850.000</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DetailPenerbangan    

import React from 'react';
import { CreditCard, ChevronDown, ChevronUp, Plane } from "lucide-react";

const DetailPenerbangan = () => {
    const FLIGHT_DATA = {
        bookingCode: "6723y2GHK",
        departure: {
            time: "07:00",
            date: "3 Maret 2023",
            location: "Soekarno Hatta - Terminal 1A Domestik",
        },
        arrival: {
            time: "11:00",
            date: "3 Maret 2023",
            location: "Melbourne International Airport",
        },
        flight: {
            airline: "Jet Air",
            class: "Economy",
            code: "JT - 203",
            info: {
                baggage: "20 kg",
                cabinBaggage: "7 kg",
                entertainment: "In Flight Entertainment",
            },
        },
        price: {
            adults: {
                count: 2,
                price: 9550000,
            },
            baby: {
                count: 1,
                price: 0,
            },
            tax: 300000,
        },
    };

    return (
        <div className="flex flex-col w-full lg:w-96">
            <div className="bg-white p-5 rounded-md shadow-md">
                <div className="flex justify-between mb-4">
                    <span className="text-gray-600">Booking Code:</span>
                    <span className="text-purple-600 font-semibold">
                        {FLIGHT_DATA.bookingCode}
                    </span>
                </div>
                <div className="mb-6">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{FLIGHT_DATA.departure.time}</span>
                        <span className="text-purple-600">Keberangkatan</span>
                    </div>
                    <div className="text-sm">{FLIGHT_DATA.departure.date}</div>
                    <div className="font-medium">{FLIGHT_DATA.departure.location}</div>
                </div>
                <div className="mb-6">
                    <div className="font-medium">
                        {FLIGHT_DATA.flight.airline} - {FLIGHT_DATA.flight.class}
                    </div>
                    <div className="text-gray-600">{FLIGHT_DATA.flight.code}</div>
                    <div className="mt-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Plane size={16} className="text-yellow-500" />
                            <span>Informasi:</span>
                        </div>
                        <ul className="text-sm text-gray-600 ml-6">
                            <li>Baggage {FLIGHT_DATA.flight.info.baggage}</li>
                            <li>Cabin baggage {FLIGHT_DATA.flight.info.cabinBaggage}</li>
                            <li>{FLIGHT_DATA.flight.info.entertainment}</li>
                        </ul>
                    </div>
                </div>
                <div className="mb-6">
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-600">{FLIGHT_DATA.arrival.time}</span>
                        <span className="text-purple-600">Kedatangan</span>
                    </div>
                    <div className="text-sm">{FLIGHT_DATA.arrival.date}</div>
                    <div className="font-medium">{FLIGHT_DATA.arrival.location}</div>
                </div>
                <div className="border-t pt-4">
                    <h3 className="font-medium mb-2">Rincian Harga</h3>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>{FLIGHT_DATA.price.adults.count} Adults</span>
                            <span>IDR {FLIGHT_DATA.price.adults.price.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>{FLIGHT_DATA.price.baby.count} Baby</span>
                            <span>IDR {FLIGHT_DATA.price.baby.price}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span>Tax</span>
                            <span>IDR {FLIGHT_DATA.price.tax.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-purple-600 pt-2 border-t">
                            <span>Total</span>
                            <span>IDR 9.850.000</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPenerbangan;
