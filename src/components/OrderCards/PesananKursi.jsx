// import React, { useState } from 'react';
// import { Calendar } from 'lucide-react';

// const PesananKursi = () => {
//     const [selectedSeats, setSelectedSeats] = useState([]);

//     // Generate seat layout data
//     const rows = Array.from({ length: 12 }, (_, i) => i + 1);
//     const leftColumns = ['A', 'B', 'C'];
//     const rightColumns = ['D', 'E', 'F'];

//     // Predefined unavailable seats
//     const unavailableSeats = new Set([
//         'A1',
//         'B1',
//         'C1',
//         'D1',
//         'E1',
//         'F1',
//         'A3',
//         'B3',
//         'C3',
//         'A5',
//         'B5',
//         'C5',
//         'A8',
//         'B8',
//         'C8',
//         'A9',
//         'B9',
//         'C9',
//         'A10',
//         'B10',
//         'C10',
//         'D10',
//         'E10',
//         'F10',
//         'D11',
//         'E11',
//         'F11',
//         'A12',
//         'B12',
//         'C12',
//     ]);

//     // Special seats (P1, P2)
//     const specialSeats = {
//         D3: 'P1',
//         E3: 'P2',
//     };

//     const handleSeatSelect = (seatId) => {
//         setSelectedSeats((prev) => {
//             if (prev.includes(seatId)) {
//                 return prev.filter((id) => id !== seatId);
//             }
//             if (prev.length < passengers.length) {
//                 return [...prev, seatId];
//             }
//             return prev;
//         });
//     };

//     const getSeatColor = (seatId) => {
//         if (unavailableSeats.has(seatId)) return 'bg-gray-300';
//         if (selectedSeats.includes(seatId)) return 'bg-purple-600';
//         if (specialSeats[seatId]) return 'bg-purple-600';
//         return 'bg-success hover:bg-green-500';
//     };

//     return (
//         <div className="">
//             <div className="w-full max-w-2xl border border-black rounded-lg">
//                 <div className="p-6">
//                     <h1 className='text-xl font-bold mb-4'>Pilih Kursi</h1>
//                     <div className="head-card p-4 rounded-t-lg bg-success text-white">
//                         <h1 className='text-base'>Data Diri Pemesan</h1>
//                     </div>
//                     <div className="flex justify-center mb-8">
//                         <div className="grid gap-2">
//                             {/* Column headers */}
//                             <div className="grid grid-cols-7 gap-2">
//                                 <div className="col-span-3 grid grid-cols-3">
//                                     {leftColumns.map((col) => (
//                                         <div key={col} className="text-center font-semibold">
//                                             {col}
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <div /> {/* Middle spacer */}
//                                 <div className="col-span-3 grid grid-cols-3">
//                                     {rightColumns.map((col) => (
//                                         <div key={col} className="text-center font-semibold">
//                                             {col}
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Seat grid */}
//                             {rows.map((row) => (
//                                 <div key={row} className="grid grid-cols-7 gap-2">
//                                     {/* Left seats */}
//                                     <div className="col-span-3 grid grid-cols-3 gap-2">
//                                         {leftColumns.map((col) => {
//                                             const seatId = `${col}${row}`;
//                                             return (
//                                                 <button
//                                                     key={seatId}
//                                                     className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold transition-colors ${getSeatColor(seatId)}`}
//                                                     onClick={() => handleSeatSelect(seatId)}
//                                                     disabled={
//                                                         unavailableSeats.has(seatId) || specialSeats[seatId]
//                                                     }
//                                                 >
//                                                     {unavailableSeats.has(seatId)
//                                                         ? 'X'
//                                                         : specialSeats[seatId] || ''}
//                                                 </button>
//                                             );
//                                         })}
//                                     </div>

//                                     {/* Row number */}
//                                     <div className="flex items-center justify-center font-semibold">
//                                         {row}
//                                     </div>

//                                     {/* Right seats */}
//                                     <div className="col-span-3 grid grid-cols-3 gap-2">
//                                         {rightColumns.map((col) => {
//                                             const seatId = `${col}${row}`;
//                                             return (
//                                                 <button
//                                                     key={seatId}
//                                                     className={`w-10 h-10 rounded-lg flex items-center justify-center text-white transition-colors ${getSeatColor(seatId)}`}
//                                                     onClick={() => handleSeatSelect(seatId)}
//                                                     disabled={
//                                                         unavailableSeats.has(seatId) || specialSeats[seatId]
//                                                     }
//                                                 >
//                                                     {unavailableSeats.has(seatId)
//                                                         ? 'X'
//                                                         : specialSeats[seatId] || ''}
//                                                 </button>
//                                             );
//                                         })}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>            
//         </div>
//     );
// };

// export default PesananKursi;


import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

const PesananKursi = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    // Generate seat layout data
    const rows = Array.from({ length: 12 }, (_, i) => i + 1);
    const leftColumns = ['A', 'B', 'C'];
    const rightColumns = ['D', 'E', 'F'];

    // Predefined unavailable seats
    const unavailableSeats = new Set([
        'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'A3', 'B3', 'C3', 'A5', 'B5', 'C5', 'A8', 'B8', 'C8', 'A9', 'B9', 'C9', 'A10', 'B10', 'C10', 'D10', 'E10', 'F10', 'D11', 'E11', 'F11', 'A12', 'B12', 'C12',
    ]);

    // Special seats (P1, P2)
    const specialSeats = {
        D3: 'P1',
        E3: 'P2',
    };

    const handleSeatSelect = (seatId) => {
        setSelectedSeats((prev) => {
            if (prev.includes(seatId)) {
                return prev.filter((id) => id !== seatId);
            }
            return [...prev, seatId];
        });
    };

    const getSeatColor = (seatId) => {
        if (unavailableSeats.has(seatId)) return 'bg-gray-300';
        if (selectedSeats.includes(seatId)) return 'bg-purple-600';
        if (specialSeats[seatId]) return 'bg-purple-600';
        return 'bg-green-500 hover:bg-green-600';
    };

    return (
        <div className="w-full max-w-2xl border border-black rounded-lg">
            <div className="p-6">
                <h1 className='text-xl font-bold mb-4'>Pilih Kursi</h1>
                <div className="head-card p-4 rounded-t-lg bg-purple-600 text-white">
                    <h1 className='text-base'>Data Diri Pemesan</h1>
                </div>
                <div className="flex justify-center mb-8">
                    <div className="grid gap-2">
                        {/* Seat grid */}
                        {rows.map((row) => (
                            <div key={row} className="grid grid-cols-7 gap-2">
                                {/* Left seats */}
                                <div className="col-span-3 grid grid-cols-3 gap-2">
                                    {leftColumns.map((col) => {
                                        const seatId = `${col}${row}`;
                                        return (
                                            <button
                                                key={seatId}
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold transition-colors ${getSeatColor(seatId)}`}
                                                onClick={() => handleSeatSelect(seatId)}
                                                disabled={unavailableSeats.has(seatId) || specialSeats[seatId]}
                                            >
                                                {unavailableSeats.has(seatId)
                                                    ? 'X'
                                                    : specialSeats[seatId] || ''}
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Row number */}
                                <div className="flex items-center justify-center font-semibold">
                                    {row}
                                </div>

                                {/* Right seats */}
                                <div className="col-span-3 grid grid-cols-3 gap-2">
                                    {rightColumns.map((col) => {
                                        const seatId = `${col}${row}`;
                                        return (
                                            <button
                                                key={seatId}
                                                className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold transition-colors ${getSeatColor(seatId)}`}
                                                onClick={() => handleSeatSelect(seatId)}
                                                disabled={unavailableSeats.has(seatId) || specialSeats[seatId]}
                                            >
                                                {unavailableSeats.has(seatId)
                                                    ? 'X'
                                                    : specialSeats[seatId] || ''}
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
