import React, { useState, useEffect } from 'react';
import NavbarAuthentication from '../components/fragments/NavbarAuthentication';
import OrderHeaderHistory from '../components/fragments/OrderSection/OrderHeaderHistory';
import { PencilLine, Settings, LogOut } from 'lucide-react';

const ProfilePage = () => {
    const [userData, setUserData] = useState({
        name: '',
        phone: '',
        email: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/profile') 
            .then((response) => response.json())
            .then((data) => {
                setUserData({
                    name: data.name,
                    phone: data.phone,
                    email: data.email
                });
            })
            .catch((error) => console.error('Error fetching profile:', error));
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/profile', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then((response) => {
                if (!response.ok) {
                    
                    throw new Error('Gagal memperbarui data');
                }
                return response.json(); 
            })
            .then((data) => {
                console.log('Data berhasil diperbarui:', data); 
                setIsModalOpen(true); 
                setErrorMessage(null); 
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
                setErrorMessage(error.message);
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <NavbarAuthentication search={false} />
            <OrderHeaderHistory />
            <div className="mx-auto px-4 sm:px-6 lg:px-16 max-w-screen-lg py-8 flex flex-col md:flex-row gap-8">
                <div className="left-section w-full md:w-[370px] h-[189px] flex-col space-y-2">
                    <div className="space-y-5">
                        <div className="flex items-center space-x-3 p-2 border-b-[1.5px] pb-4">
                            <PencilLine size={28} color="#7126B5" />
                            <span>Ubah Profil</span>
                        </div>
                        <div className="flex items-center space-x-3 p-2 cursor-pointer border-b-[1.5px] pb-4">
                            <Settings size={28} color="#7126B5" />
                            <span>Pengaturan Akun</span>
                        </div>
                        <div className="flex items-center space-x-3 p-2 cursor-pointer border-b-[1.5px] pb-4">
                            <LogOut size={28} color="#7126B5" />
                            <span>Keluar</span>
                        </div>
                    </div>
                    <div className="text-gray-400 text-sm mt-4 text-center">Version 1.1.0</div>
                </div>

                <div className="mt-8 md:mt-0 w-full md:w-[518px] h-[462px] border-2 p-4 rounded-[4px]">
                    <h1 className="text-xl font-semibold py-4">Ubah Data Profil</h1>

                    <div className="mb-6">
                        <div className="bg-purple-400 text-white p-3 rounded-t-lg">Data Diri</div>

                        <div className="space-y-4 p-4 border-gray-200 rounded-b-lg">
                            <div>
                                <label className="block text-sm font-medium mb-1">Nama Lengkap</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    value={userData.name}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Nomor Telepon</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    value={userData.phone}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="w-full p-2 border border-gray-300 rounded-lg"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button
                            className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors w-full sm:w-auto"
                            onClick={handleSubmit}
                        >
                            Simpan
                        </button>
                    </div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold text-center">Data Berhasil Diperbarui!</h2>
                        <div className="mt-4 flex justify-center">
                            <button
                                className="bg-purple-700 text-white px-6 py-2 rounded-lg"
                                onClick={closeModal}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {errorMessage && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold text-center text-red-600">Error!</h2>
                        <p className="text-center text-red-500">{errorMessage}</p>
                        <div className="mt-4 flex justify-center">
                            <button
                                className="bg-red-600 text-white px-6 py-2 rounded-lg"
                                onClick={() => setErrorMessage(null)}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
