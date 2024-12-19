import React, { useState, useEffect } from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import OrderHeaderHistory from "../components/fragments/OrderSection/OrderHeaderHistory";
import SidebarProfile from "../components/fragments/Filter/SidebarProfile";
import EditProfile from "../components/elements/Input/EditProfile";
import AccountSettings from "../components/elements/Input/AccountSetting";

const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState("profile");

  return (
    <div>
      <Navbar search={false} type={"auth"} />
      <OrderHeaderHistory filter={false} text={"Akun"} />
      <div className="mx-auto px-4 sm:px-6 lg:px-16 max-w-screen-lg py-8 flex flex-col md:flex-row gap-8">
        <SidebarProfile
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
        {activeComponent === "profile" ? <EditProfile /> : <AccountSettings />}
      </div>
    </div>
  );
};

export default ProfilePage;
