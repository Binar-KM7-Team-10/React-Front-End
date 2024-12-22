import React from 'react';
import { PencilLine, Settings, LogOut } from 'lucide-react';
import useLogout from '../../../hooks/useLogout';

const SidebarProfile = ({ activeComponent, setActiveComponent }) => {
    const { loading, logout } = useLogout()
    const handleLogout = () => {
        logout()
    }
    return (
        <div className="left-section w-full md:w-[370px] h-[240px] flex-col space-y-2 flex ">
            <div className="space-y-5">
                <div
                    onClick={() => setActiveComponent('profile')}
                    className={`flex items-center space-x-3 p-2 border-b-[1.5px] pb-4 cursor-pointer ${activeComponent === 'profile' ? 'text-purple-700' : ''}`}
                >
                    <PencilLine size={28} color="#7126B5" />
                    <span>Ubah Profil</span>
                </div>
                <div
                    onClick={() => setActiveComponent('settings')}
                    className={`flex items-center space-x-3 p-2 border-b-[1.5px] pb-4 cursor-pointer ${activeComponent === 'settings' ? 'text-purple-700' : ''}`}
                >
                    <Settings size={28} color="#7126B5" />
                    <span>Pengaturan Akun</span>
                </div>
                <div
                    onClick={handleLogout}
                    className="flex items-center space-x-3 p-2 cursor-pointer border-b-[1.5px] pb-4">
                    <LogOut size={28} color="#7126B5" />
                    <span>Keluar</span>
                </div>
            </div>
            <div className="text-gray-400 text-sm mt-4 text-center">Version 1.1.0</div>
        </div>
    )
};

export default SidebarProfile;