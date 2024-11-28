import Switch from "../Switch/Switch";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const SubDataPemumpang = ({ title_card }) => {
  const [showNamaKeluarga, setShowNamaKeluarga] = useState(false);

  const handleSwitchChange = () => {
    setShowNamaKeluarga(!showNamaKeluarga);
  };

  return (
    <div className="rounded-lg mb-10">
      <div className="head-card p-4 rounded-t-lg bg-neutral-700 text-white">
        <h1 className="text-base">{title_card}</h1>
      </div>
      <div className="body-card px-5">
        <div className="flex flex-col my-6">
          <label
            htmlFor=""
            className="font-semibold text-purple-800 mb-2 text-sm"
          >
            Tittle
          </label>
          <div className="relative">
            <select className="border-2 py-3 px-4 text-base rounded-[8px] w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out">
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col my-6">
          <label
            htmlFor=""
            className="font-semibold text-purple-800 mb-2 text-sm"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>
        <div className="flex justify-between">
          <p>Punya Nama Keluarga?</p>
          <Switch onChange={handleSwitchChange} />
        </div>
        {showNamaKeluarga && (
          <div className="flex flex-col my-6">
            <label
              htmlFor=""
              className="font-semibold text-purple-800 mb-2 text-sm"
            >
              Nama Keluarga
            </label>
            <input
              type="text"
              className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
            />
          </div>
        )}

        <div className="flex flex-col my-6">
          <label
            htmlFor=""
            className="font-semibold text-purple-800 mb-2 text-sm"
          >
            Tanggal Lahir
          </label>
          <input
            type="date"
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>
        <div className="flex flex-col my-6">
          <label
            htmlFor=""
            className="font-semibold text-purple-800 mb-2 text-sm"
          >
            Kewarganegaraan
          </label>
          <input
            type="text"
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>
        <div className="flex flex-col my-6">
          <label
            htmlFor=""
            className="font-semibold text-purple-800 mb-2 text-sm"
          >
            Ktp/Paspor
          </label>
          <input
            type="text"
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>
        <div className="flex flex-col my-6">
          <label
            htmlFor=""
            className="font-semibold text-purple-800 mb-2 text-sm"
          >
            Negara Penerbit
          </label>
          <select className="border-2 py-3 px-4 text-sm rounded-[4px] w-full">
            <option value=""></option>
            <option value="Indonesia">Indonesia</option>
          </select>
        </div>
        <div className="flex flex-col my-6">
          <label
            htmlFor=""
            className="font-semibold text-purple-800 mb-2 text-sm"
          >
            Berlaku Sampai
          </label>
          <input
            type="date"
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SubDataPemumpang;
