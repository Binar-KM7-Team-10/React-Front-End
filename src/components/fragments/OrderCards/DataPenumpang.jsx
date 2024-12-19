import React, { useState } from 'react';
import SubDataPemumpang from './SubDataPenumpang';

const DataPenumpang = ({ dataPsg }) => {
  let numberPsg = 1; // Variabel untuk melacak nomor penumpang

  const itemAdult = [];
  for (let a = 0; a < dataPsg[0]; a++) {
    itemAdult.push(
      <SubDataPemumpang
        key={`adult-${a}`}
        title_card={`Data Diri Penumpang ${numberPsg} - Dewasa`}
      />
    );
    numberPsg++;
  }

  const itemKid = [];
  for (let b = 0; b < dataPsg[1]; b++) {
    itemKid.push(
      <SubDataPemumpang
        key={`kid-${b}`}
        title_card={`Data Diri Penumpang ${numberPsg} - Anak`}
      />
    );
    numberPsg++;
  }

  const itemBaby = [];
  for (let c = 0; c < dataPsg[2]; c++) {
    itemBaby.push(
      <SubDataPemumpang
        key={`baby-${c}`}
        title_card={`Data Diri Penumpang ${numberPsg} - Bayi`}
      />
    );
    numberPsg++;
  }

  return (
    <div className="border border-black p-5 rounded-md">
      <h1 className="text-xl font-bold mb-4">Isi Data Penumpang</h1>
      {itemAdult}
      {itemKid}
      {itemBaby}
    </div>
  );
};

export default DataPenumpang;