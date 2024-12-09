import React from "react";
import { FiList, FiBell, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const IconGrubNavbar = () => {
    return (
        <div className="flex gap-5">
            <FiList size={20} />
            <FiBell size={20} />
            <Link to={"/profile"}>
                <FiUser size={20} />
            </Link>
        </div>
    )
}

export default IconGrubNavbar


