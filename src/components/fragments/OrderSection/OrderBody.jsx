import React, { useState } from 'react';
import DataPemesan from '../OrderCards/DataPemesan';
import DataPenumpang from '../OrderCards/DataPenumpang';
import PesananKursi from '../OrderCards/PesananKursi';
import DetailPenerbangan from '../OrderCards/DetailPenerbangan';

const OrderBody = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
  };

  return (
    <div className='my-8'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg md:flex gap-6'>
        <div className='left-section w-full space-y-6 md:w-7/12 flex-col'>
          <DataPemesan />
          <DataPenumpang />
          <PesananKursi />
          <div className="flex justify-center">
            <button 
              onClick={handleSave} 
              className={`w-11/12 max-w-2xl py-4 rounded-lg text-xl transition-opacity shadow-md 
                ${isSaved ? 'bg-gray-400 text-gray-700 cursor-not-allowed' : 'bg-[#7126B5] text-white hover:opacity-90'}`}
              disabled={isSaved} 
            >
              Simpan
            </button>
          </div>
        </div>
        <div className="w-full md:w-5/12 mt-8 md:mt-0">
          <DetailPenerbangan />
          {isSaved && (
            <div className="mt-6 flex justify-center">
              <button className="w-[350px] bg-[#FF0000] text-white py-4 rounded-[12px] text-xl hover:opacity-90 transition-opacity shadow-md">
                Lanjut Bayar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderBody;
