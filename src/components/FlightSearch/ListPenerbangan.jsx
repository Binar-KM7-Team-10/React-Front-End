import React from 'react';

const ListPenerbangan = ({flights}) => {
    return (
        <>
            {
                flights.map((flight) => (
                    <li
                        key={flight.id}
                        className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm"
                    >
                        <div>
                            <span className="block font-semibold text-purple-600">
                                {flight.airline} - Economy
                            </span>
                            <div className="text-sm text-gray-600">
                                {flight.time} &mdash; {flight.duration}
                            </div>
                        </div>
                        <div className="text-right">
                            <div
                                className={`font-bold ${flight.price === 5950000
                                    ? "text-red-500"
                                    : "text-purple-600"
                                    }`}
                            >
                                IDR {flight.price.toLocaleString("id-ID")}
                            </div>
                            <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md">
                                Pilih
                            </button>
                        </div>
                    </li>
                ))
            }
        </>
    )
}

export default ListPenerbangan