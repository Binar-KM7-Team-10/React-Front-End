import React, { useState } from 'react';

const PesananKursi = ({ seatList }) => {
    console.log(seatList);
    const [selectedSeats, setSelectedSeats] = useState([]);

    const rows = Array.from({ length: 12 }, (_, i) => i + 1);
    const leftColumns = ['A', 'B', 'C'];
    const rightColumns = ['D', 'E', 'F'];

    // Set kursi yang kosong berdasarkan seatList
    const availableSeats = new Set(seatList);

    const handleSeatSelect = (seatId) => {
        setSelectedSeats((prev) => {
            if (prev.includes(seatId)) {
                return prev.filter((id) => id !== seatId);
            }
            return [...prev, seatId];
        });
    };

    const getSeatColor = (seatId) => {
        if (!availableSeats.has(seatId)) return 'bg-gray-300'; // Kursi unavailable
        if (selectedSeats.includes(seatId)) return 'bg-purple-600'; // Kursi terpilih
        return 'bg-green-500 hover:bg-green-600'; // Kursi tersedia
    };

    return (
        <div className="w-full max-w-2xl border border-black rounded-lg">
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Pilih Kursi</h1>
                <div className="head-card p-4 rounded-t-lg bg-purple-600 text-white mb-5">
                    <h1 className="text-base">Data Diri Pemesan</h1>
                </div>
                <div className="flex justify-center mb-8">
                    <div className="grid gap-2">
                        <div className="grid grid-cols-7 gap-2">
                            <div className="col-span-3 grid grid-cols-3 gap-2">
                                {leftColumns.map((col) => (
                                    <p key={col} className="text-center font-bold">
                                        {col}
                                    </p>
                                ))}
                            </div>
                            <div className="flex items-center justify-center font-semibold">

                            </div>
                            <div className="col-span-3 grid grid-cols-3 gap-2">
                                <div className="col-span-3 grid grid-cols-3 gap-2">
                                    {rightColumns.map((col) => (
                                        <p key={col} className="text-center font-bold">
                                            {col}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {rows.map((row) => (
                            <div key={row} className="grid grid-cols-7 gap-2">
                                <div className="col-span-3 grid grid-cols-3 gap-2">
                                    {leftColumns.map((col) => {
                                        const seatId = `${col}${row}`;
                                        return (
                                            <button
                                                key={seatId}
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold transition-colors ${getSeatColor(seatId)}`}
                                                onClick={() => handleSeatSelect(seatId)}
                                                disabled={!availableSeats.has(seatId)} // Disabled jika kursi tidak tersedia
                                            >
                                                {availableSeats.has(seatId) ? "" : 'X'}
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="flex items-center justify-center font-semibold">
                                    {row}
                                </div>

                                <div className="col-span-3 grid grid-cols-3 gap-2">
                                    {rightColumns.map((col) => {
                                        const seatId = `${col}${row}`;
                                        return (
                                            <button
                                                key={seatId}
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold transition-colors ${getSeatColor(seatId)}`}
                                                onClick={() => handleSeatSelect(seatId)}
                                                disabled={!availableSeats.has(seatId)} // Disabled jika kursi tidak tersedia
                                            >
                                                {availableSeats.has(seatId) ? " " : 'X'}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PesananKursi;
