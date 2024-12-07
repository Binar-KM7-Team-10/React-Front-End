import React from 'react';
import { Lock } from 'lucide-react';

const AccountSettings = () => {
    return (
        <div className="mt-8 md:mt-0 w-full md:w-[518px] h-[462px] border-2 p-4 rounded-[4px]">
            <h1 className="text-xl font-semibold py-4">Pengaturan Akun</h1>

            <div className="mb-6">
                <div className="bg-purple-400 text-white p-3 rounded-t-lg flex items-center gap-2">
                    <Lock size={20} />
                    <span>Kata Sandi</span>
                </div>

                <div className="space-y-4 p-4 border-gray-200 rounded-b-lg">
                    <div>
                        <label className="block text-sm font-medium mb-1">Kata Sandi Saat Ini</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Kata Sandi Baru</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Konfirmasi Kata Sandi Baru</label>
                        <input
                            type="password"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-end mt-4">
                <button className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors w-full sm:w-auto">
                    Simpan 
                </button>
            </div>
        </div>
    );
};

export default AccountSettings;