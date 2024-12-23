import React, { useState, useCallback } from "react";
import Switch from "../../elements/Switch/Switch";

const SubDataPenumpang = ({ title_card, groupAge, index, onPenumpangChange }) => {
  const [showNamaKeluarga, setShowNamaKeluarga] = useState(false);
  const [formData, setFormData] = useState({
    label: `P${index+1}`,
    ageGroup: groupAge,
    title: "",
    fullName: "",
    familyName: "",
    dateOfBirth: "",
    nationality: "",
    identityNumber: "",
    issuingCountry: "",
    expiryDate: "",
  });

  const handleInputChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      if (!name) return;

      const updatedData = { ...formData, [name]: value };
      setFormData(updatedData);

      // Kirim data ke parent
      if (typeof onPenumpangChange === "function") {
        onPenumpangChange(index, updatedData);
      }
    },
    [formData, index, onPenumpangChange]
  );

  const handleSwitchChange = useCallback(() => {
    setShowNamaKeluarga((prev) => !prev);
    if (showNamaKeluarga) {
      setFormData((prevData) => {
        const updatedData = { ...prevData, familyName: "" };
        if (typeof onPenumpangChange === "function") {
          onPenumpangChange(index, updatedData);
        }
        return updatedData;
      });
    }
  }, [showNamaKeluarga, index, onPenumpangChange]);

  return (
    <div className="rounded-lg mb-10">
      <div className="head-card p-4 rounded-t-lg bg-neutral-700 text-white">
        <h1 className="text-base">{title_card}</h1>
      </div>
      <div className="body-card px-5">
        {/* Title Field */}
        <div className="flex flex-col my-6">
          <label htmlFor="title" className="font-semibold text-purple-800 mb-2 text-sm">
            Title
          </label>
          <select
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="border-2 py-3 px-4 text-base rounded-[8px] w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out"
          >
            <option value="" disabled>
              Pilih Title
            </option>
            <option value="Mr.">Mr</option>
            <option value="Mrs.">Mrs</option>
            <option value="Miss.">Miss</option>
            <option value="Ms.">Ms</option>
            <option value="Master">Master</option>
          </select>
        </div>

        {/* Full Name Field */}
        <div className="flex flex-col my-6">
          <label htmlFor="fullName" className="font-semibold text-purple-800 mb-2 text-sm">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>

        {/* Family Name Toggle */}
        <div className="flex justify-between">
          <p>Punya Nama Keluarga?</p>
          <Switch onChange={handleSwitchChange} checked={showNamaKeluarga} />
        </div>

        {/* Family Name Field */}
        {showNamaKeluarga && (
          <div className="flex flex-col my-6">
            <label htmlFor="familyName" className="font-semibold text-purple-800 mb-2 text-sm">
              Nama Keluarga
            </label>
            <input
              type="text"
              name="familyName"
              value={formData.familyName}
              onChange={handleInputChange}
              className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
            />
          </div>
        )}

        {/* Date of Birth Field */}
        <div className="flex flex-col my-6">
          <label htmlFor="dateOfBirth" className="font-semibold text-purple-800 mb-2 text-sm">
            Tanggal Lahir
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>

        {/* Nationality Field */}
        <div className="flex flex-col my-6">
          <label htmlFor="nationality" className="font-semibold text-purple-800 mb-2 text-sm">
            Kebangsaan
          </label>
          <input
            type="text"
            name="nationality"
            value={formData.nationality}
            onChange={handleInputChange}
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>

        {/* Identity Number Field */}
        <div className="flex flex-col my-6">
          <label htmlFor="identityNumber" className="font-semibold text-purple-800 mb-2 text-sm">
            Nomor Identitas
          </label>
          <input
            type="text"
            name="identityNumber"
            value={formData.identityNumber}
            onChange={handleInputChange}
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>

        {/* Issuing Country Field */}
        <div className="flex flex-col my-6">
          <label htmlFor="issuingCountry" className="font-semibold text-purple-800 mb-2 text-sm">
            Negara Penerbit
          </label>
          <input
            type="text"
            name="issuingCountry"
            value={formData.issuingCountry}
            onChange={handleInputChange}
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>

        {/* Expiry Date Field */}
        <div className="flex flex-col my-6">
          <label htmlFor="expiryDate" className="font-semibold text-purple-800 mb-2 text-sm">
            Tanggal Kedaluwarsa
          </label>
          <input
            type="date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default SubDataPenumpang;
