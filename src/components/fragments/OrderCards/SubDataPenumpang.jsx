import React, { useState, useEffect } from "react";
import Switch from "../../elements/Switch/Switch";

const SubDataPenumpang = ({ title_card, onValidate }) => {
  const [showNamaKeluarga, setShowNamaKeluarga] = useState(false);
  const [formData, setFormData] = useState({
    tittle: "",
    fullName: "",
    familyName: "",
    dateOfBirth: "",
    nationality: "",
    identityNumber: "",
    issuingCountry: "",
    expiryDate: "",
  });

  const handleSwitchChange = () => {
    setShowNamaKeluarga(!showNamaKeluarga);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (!name) return;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const isValid = validateForm();
    if (typeof onValidate === "function") {
      onValidate(isValid);
    }
  }, [formData, onValidate]);

  const validateForm = () => {
    const { fullName, dateOfBirth, nationality, identityNumber } = formData;
    return fullName && dateOfBirth && nationality && identityNumber;
  };

  return (
    <div className="rounded-lg mb-10">
      <div className="head-card p-4 rounded-t-lg bg-neutral-700 text-white">
        <h1 className="text-base">{title_card}</h1>
      </div>
      <div className="body-card px-5">
        <div className="flex flex-col my-6">
          <label htmlFor="tittle" className="font-semibold text-purple-800 mb-2 text-sm">
            Tittle
          </label>
          <div className="relative">
            <select
              name="tittle"
              value={formData.tittle}
              onChange={handleInputChange}
              className="border-2 py-3 px-4 text-base rounded-[8px] w-full focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all ease-in-out"
            >
              <option value="" disabled>
                Pilih Tittle
              </option>
              <option value="mr">Mr</option>
              <option value="mrs">Mrs</option>
            </select>
          </div>
        </div>

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

        <div className="flex justify-between">
          <p>Punya Nama Keluarga?</p>
          <Switch onChange={handleSwitchChange} checked={showNamaKeluarga} />
        </div>

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
      </div>
    </div>
  );
};

export default SubDataPenumpang;
