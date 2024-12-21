import React, { useState, useEffect } from "react";

const PesananKursi = ({ seatList, totalSeatsRequired, onSeatSelect }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const rows = Array.from({ length: 12 }, (_, i) => i + 1);
  const leftColumns = ["A", "B", "C"];
  const rightColumns = ["D", "E", "F"];
  const availableSeats = new Set(seatList);

  const handleSeatSelect = (seatId) => {
    setSelectedSeats((prev) => {
      if (prev.some((seat) => seat.id === seatId)) {
        // Hapus kursi jika sudah dipilih
        return prev.filter((seat) => seat.id !== seatId);
      }
      if (prev.length < totalSeatsRequired) {
        // Tambahkan kursi dengan label penumpang (P1, P2, dst.)
        return [...prev, { id: seatId, label: `P${prev.length + 1}` }];
      }
      return prev;
    });
  };

  const resetSeats = () => {
    setSelectedSeats([]);
  };

  const getSeatContent = (seatId) => {
    const selectedSeat = selectedSeats.find((seat) => seat.id === seatId);
    return selectedSeat ? selectedSeat.label : seatId;
  };

  const getSeatColor = (seatId) => {
    if (!availableSeats.has(seatId)) return "bg-gray-300";
    if (selectedSeats.some((seat) => seat.id === seatId)) return "bg-purple-600";
    return "bg-green-500 hover:bg-green-600";
  };

  useEffect(() => {
    if (selectedSeats.length === totalSeatsRequired) {
      // Kirim data kursi yang dipilih ke parent
      onSeatSelect(selectedSeats.map((seat) => seat.id));
    }
  }, [selectedSeats, onSeatSelect, totalSeatsRequired]);

  return (
    <div className="w-full max-w-2xl border border-black rounded-lg">
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">Pilih Kursi</h1>
        <div className="head-card p-4 rounded-t-lg bg-purple-600 text-white mb-5">
          <h1 className="text-base">Data Diri Pemesan</h1>
        </div>
        <p className="text-gray-500">
          Jumlah kursi yang harus dipilih: {totalSeatsRequired}
        </p>
        <p
          className={`text-sm mb-5 ${
            selectedSeats.length === totalSeatsRequired ? "text-green-500" : "text-red-500"
          }`}
        >
          {selectedSeats.length === totalSeatsRequired
            ? "Jumlah kursi yang dipilih sudah sesuai."
            : `Anda telah memilih ${selectedSeats.length} kursi. Silakan pilih ${
                totalSeatsRequired - selectedSeats.length
              } kursi lagi.`}
        </p>
        <button
          onClick={resetSeats}
          className="mb-5 px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition-colors"
        >
          Reset Pilihan
        </button>
        <div className="grid gap-2">
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
                      disabled={
                        !availableSeats.has(seatId) ||
                        (selectedSeats.length >= totalSeatsRequired &&
                          !selectedSeats.some((seat) => seat.id === seatId))
                      }
                    >
                      {availableSeats.has(seatId) ? getSeatContent(seatId) : "X"}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center justify-center font-semibold">{row}</div>
              <div className="col-span-3 grid grid-cols-3 gap-2">
                {rightColumns.map((col) => {
                  const seatId = `${col}${row}`;
                  return (
                    <button
                      key={seatId}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold transition-colors ${getSeatColor(seatId)}`}
                      onClick={() => handleSeatSelect(seatId)}
                      disabled={
                        !availableSeats.has(seatId) ||
                        (selectedSeats.length >= totalSeatsRequired &&
                          !selectedSeats.some((seat) => seat.id === seatId))
                      }
                    >
                      {availableSeats.has(seatId) ? getSeatContent(seatId) : "X"}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PesananKursi;
