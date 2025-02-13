import React from 'react';
import SubDataPemumpang from './SubDataPenumpang';

const DataPenumpang = ({ dataPsg, onPenumpangChange }) => {
  let numberPsg = 1;

  const itemAdult = [];
  for (let a = 0; a < dataPsg[0]; a++) {
    itemAdult.push(
      <SubDataPemumpang
        key={`adult-${a}`}
        groupAge={"Adult"}
        index={numberPsg - 1} 
        title_card={`Data Diri Penumpang ${numberPsg} - Dewasa`}
        onPenumpangChange={onPenumpangChange} 
      />
    );
    numberPsg++;
  }

  const itemKid = [];
  for (let b = 0; b < dataPsg[1]; b++) {
    itemKid.push(
      <SubDataPemumpang
        key={`kid-${b}`}
        groupAge={"Child"}
        index={numberPsg - 1}
        title_card={`Data Diri Penumpang ${numberPsg} - Anak`}
        onPenumpangChange={onPenumpangChange}
      />
    );
    numberPsg++;
  }
  return (
    <div className="border border-black p-5 rounded-md">
      <h1 className="text-xl font-bold mb-4">Isi Data Penumpang</h1>
      {itemAdult}
      {itemKid}
    </div>
  );
};


export default DataPenumpang;