import React, { useState, useEffect } from "react";
import Navbar from "../components/fragments/Navbar/Navbar";
import OrderHeaderHistory from "../components/fragments/OrderSection/OrderHeaderHistory";
import SidebarProfile from "../components/fragments/Filter/SidebarProfile";
import EditProfile from "../components/elements/Input/EditProfile";
import AccountSettings from "../components/elements/Input/AccountSetting";
import Loading from "../components/elements/Loading/Loading";

const ProfilePage = () => {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (activeComponent !== "profile" && activeComponent !== "settings") {
      return;
    }

    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, [activeComponent]);

  return (
    <div>
      <Navbar search={false} type={"auth"} />
      <OrderHeaderHistory filter={false} text={"Akun"} />
      <div className="mx-auto px-4 sm:px-6 lg:px-16 max-w-screen-lg py-8 flex flex-col md:flex-row gap-8">
        <SidebarProfile
          activeComponent={activeComponent}
          setActiveComponent={setActiveComponent}
        />
        {isLoading ? (
          <div className="w-full flex justify-center items-center">
            <Loading />
          </div>
        ) : activeComponent === "profile" ? (
          <EditProfile />
        ) : activeComponent === "settings" ? (
          <AccountSettings />
        ) : (
          <div className="w-full flex justify-center items-center"></div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
