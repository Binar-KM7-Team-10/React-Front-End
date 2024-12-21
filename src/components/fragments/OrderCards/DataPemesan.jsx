import React, { useState, useEffect } from 'react';
import Switch from '../../elements/Switch/Switch';
import Cookies from "js-cookie";

const DataPemesan = ({ title_card, onValidate, onSubmit }) => {
  const userCookie = Cookies.get("user");
  const userData = userCookie ? JSON.parse(userCookie) : {};

  const [showNamaKeluarga, setShowNamaKeluarga] = useState(false);
  const [formData, setFormData] = useState({
    fullName: userData.fullName || "",
    familyName: "",
    phoneNumber: userData.phoneNumber || "",
    email: userData.email || "",
  });

  const handleSwitchChange = () => {
    setShowNamaKeluarga(!showNamaKeluarga);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    onSubmit(updatedFormData);
  };

  const validateForm = () => {
    const { fullName, phoneNumber, email } = formData;
    // Hanya validasi field yang wajib
    return fullName && phoneNumber && email;
  };

  useEffect(() => {
    const isValid = validateForm();
    onValidate(isValid);
  }, [formData]);

  useEffect(() => {
    onSubmit(formData);
  }, [formData]);

  return (
    <div className="border border-black p-5 rounded-md">
      <h1 className="text-xl font-bold mb-4">{title_card}</h1>
      <div className="rounded-lg">
        <div className="head-card p-4 rounded-t-lg bg-neutral-700 text-white">
          <h1 className="text-base">Data Diri Pemesan</h1>
        </div>
        <div className="body-card px-5">
          <div className="flex flex-col my-4">
            <label className="font-semibold text-purple-800 mb-2 text-sm">Nama Lengkap</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="border-2 py-3 px-2 text-sm rounded-[4px]"
              disabled={true}
            />
          </div>

          <div className="flex justify-between">
            <p>Punya Nama Keluarga?</p>
            <Switch onChange={handleSwitchChange} checked={showNamaKeluarga} />
          </div>

          {showNamaKeluarga && (
            <div className="flex flex-col my-6">
              <label className="font-semibold text-purple-800 mb-2 text-sm">Nama Keluarga</label>
              <input
                type="text"
                name="familyName"
                value={formData.familyName}
                onChange={handleInputChange}
                className="border-2 py-3 px-4 text-sm rounded-[4px] w-full"
              />
            </div>
          )}

          <div className="flex flex-col my-4">
            <label className="font-semibold text-purple-800 mb-2 text-sm">Nomor Telepon</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="border-2 py-3 px-2 text-sm rounded-[4px]"
              disabled={true}
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="font-semibold text-purple-800 mb-2 text-sm">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="border-2 py-3 px-2 text-sm rounded-[4px]"
              disabled={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPemesan;
