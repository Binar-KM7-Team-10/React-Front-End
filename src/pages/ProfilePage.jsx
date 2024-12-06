import React, { useState } from 'react';
import NavbarAuthentication from '../components/fragments/NavbarAuthentication';
import OrderHeaderHistory from '../components/fragments/OrderSection/OrderHeaderHistory';
import Sidebar from '../components/fragments/Filter/SidebarProfile';
import EditProfile from '../components/elements/Input/EditProfile';
import AccountSettings from '../components/elements/Input/AccountSetting';

const ProfilePage = () => {
    const [activeComponent, setActiveComponent] = useState('profile');

    return (
        <div>
            <NavbarAuthentication search={false} />
            <OrderHeaderHistory />
            <div className="mx-auto px-4 sm:px-6 lg:px-16 max-w-screen-lg py-8 flex flex-col md:flex-row gap-8">
                <Sidebar 
                    activeComponent={activeComponent} 
                    setActiveComponent={setActiveComponent} 
                />
                {activeComponent === 'profile' ? <EditProfile /> : <AccountSettings />}
            </div>
        </div>
    );
};

export default ProfilePage;