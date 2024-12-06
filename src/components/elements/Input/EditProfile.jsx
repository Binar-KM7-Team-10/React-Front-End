import React, { useState, useEffect } from 'react';
import { User } from 'lucide-react';

const EditProfile = () => {
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    
    useEffect(() => {
        fetch('http://localhost:5000/api/profile')
            .then(response => response.json())
            .then(data => setUserData(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic
    };

    return (
        <div className="mt-8 md:mt-0 w-full md:w-[518px] h-[462px] border-2 p-4 rounded-[4px]">
            <h1 className="text-xl font-semibold py-4">Ubah Data Profil</h1>
            <div className="mb-6">
            <div className="bg-purple-400 text-white p-3 rounded-t-lg flex items-center gap-2">
                    <User size={20} />
                    <span>Data Diri</span>
                </div>
                <div className="space-y-4 p-4 border-gray-200 rounded-b-lg">
                    <div>
                        <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                        <input
                            type="text"
                            name="name"
                            value={userData.name}
                            onChange={(e) => setUserData({...userData, name: e.target.value})}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
                        <input
                            type="tel"
                            name="phone"
                            value={userData.phone}
                            onChange={(e) => setUserData({...userData, phone: e.target.value})}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={userData.email}
                            onChange={(e) => setUserData({...userData, email: e.target.value})}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-4">
                <button
                    onClick={handleSubmit}
                    className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors w-full sm:w-auto"
                >
                    Simpan
                </button>
            </div>
        </div>
    );
};

export default EditProfile;