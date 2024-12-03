import React, { useState } from 'react';
import { ArrowLeft, Filter, Search } from 'lucide-react';
import SearchFlightModal from '../Modals/SearchFlightModal'; 
import DateFilterModal from '../Modals/DateFilterModal';

const ButtonHeader = () => {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [selectedFlightNumber, setSelectedFlightNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsDateModalOpen(false); 
  };

  const handleModalClose = () => {
    setIsSearchModalOpen(false);
    setIsDateModalOpen(false);
  };

  const handleFlightNumberSelect = (flightNumber) => {
    setSelectedFlightNumber(flightNumber);
    setIsSearchModalOpen(false);
  };

  const handleSearchClick = () => {
    setIsSearchModalOpen(true);
  };

  const handleDateModal = () => {
    setIsDateModalOpen(true);
  };

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg flex items-center space-x-3">
      <button onClick={handleDateModal} className="flex gap-8 bg-[#A06ECE] text-white rounded-[12px] p-5 w-full">
        <ArrowLeft />
        Beranda
      </button>
      
      <button onClick={handleDateModal} className="border-2 border-[#7126B5] rounded-[16px] w-[96px] h-[32px] flex items-center justify-center p-4">
        <div className="flex gap-1">
          <Filter color="#8A8A8A" strokeWidth={1.5} />
          Filter
        </div>
      </button>
      
      <button onClick={handleSearchClick} className="w-full sm:w-auto flex justify-center">
        <Search size={32} color="#7126B5" strokeWidth={3} />
      </button>

      <SearchFlightModal
        isOpen={isSearchModalOpen}
        onClose={handleModalClose}
        onSelect={handleFlightNumberSelect}
      />

      <DateFilterModal
        isOpen={isDateModalOpen}
        onClose={handleModalClose}
        onSelect={handleDateSelect} 
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default ButtonHeader;
