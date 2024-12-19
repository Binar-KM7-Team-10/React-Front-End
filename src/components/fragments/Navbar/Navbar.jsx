import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/Images/logo_new.png";
import Button from "../../elements/Button/Button";
import Search from "../../elements/Search/Search";
import IconGrubNavbar from "../../elements/IconGrub/IconGrubNavbar";


const Navbar = ({ search, type }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto flex h-[84px] w-full max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 md:px-16">
        <Link to="/" className="block text-teal-600">
          <img src={Logo} alt="Logo" className="h-[53px] w-[98px]" />
        </Link>
        {search ? <Search /> : ""}
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block"></nav>
          <div className="flex items-center gap-4">
            {type == "auth" ? <IconGrubNavbar /> : ""}
            {type == "nonAuth" ? <Button /> : ""}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
