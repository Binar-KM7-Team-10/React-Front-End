import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ButtonIconClose from '../Button/ButtonIconClose';

const DateFilterModal = ({
  isOpen,
  onClose,
  onSelect,
  selectedDate,
  title,
  onSave,
}) => {
  const [currentDate, setCurrentDate] = React.useState(new Date());

  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];

  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  const handlePreviousMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const formatDate = (date) => {
    if (!date) return '';
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  const isSelected = (date) => {
    return (
      date &&
      selectedDate &&
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  const handleSave = () => {
    if (onSave) onSave(selectedDate); 
    onClose(); 
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center z-100">
      <div className="bg-white rounded-2xl p-5 max-w-md w-[90%] sm:w-[400px] h-[504px] mx-4 animate-[slideUp_0.3s_ease-out]">
        <div className="flex justify-between items-center mb-4 border-b-2 pb-2 border-[#D0D0D0] " onClick={onClose} >
          <h3 className="text-lg font-semibold">{title}</h3>
          <ButtonIconClose/>
        </div>

        <div className="flex items-center justify-between mb-3">
          <button
            onClick={handlePreviousMonth}
            className="p-2 hover:bg-[#D0B7E6] rounded-full"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <h4 className="text-md font-medium text-gray-800">
            {months[currentDate.getMonth()]} - {currentDate.getFullYear()}
          </h4>
          <button
            onClick={handleNextMonth}
            className="p-2 hover:bg-[#D0B7E6] rounded-full"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>

        <Calendar
          days={getDaysInMonth(currentDate)}
          daysOfWeek={daysOfWeek}
          isSelected={isSelected}
          onSelect={onSelect}
        />

        <div className="mt-6 flex justify-end border-t-2 pt-3 border-[#D0D0D0]">
          <button
            onClick={handleSave}
            className="bg-purple-600 text-white py-2 px-8 rounded-lg hover:bg-[#4B1979]"
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

const Calendar = ({
  days,
  daysOfWeek,
  isSelected,
  onSelect,
}) => (
  <div className="grid grid-cols-7 gap-2 mt-4">
    {daysOfWeek.map((day) => (
      <div
        key={day}
        className="h-8 flex items-center justify-center text-gray-500 text-xs font-semibold"
      >
        {day}
      </div>
    ))}
    {days.map((date, index) => (
      <div
        key={index}
        className={`h-10 flex items-center justify-center rounded-md text-xs
          ${date ? 'cursor-pointer hover:bg-[#D0B7E6]' : ''} 
          ${isSelected(date) ? 'bg-purple-600 text-white' : ''} 
          ${!isSelected(date) && date ? 'text-gray-800' : 'text-gray-300'}`}
        onClick={() => date && onSelect(date)}
      >
        {date ? date.getDate() : ''}
      </div>
    ))}
  </div>
);

export default DateFilterModal;
