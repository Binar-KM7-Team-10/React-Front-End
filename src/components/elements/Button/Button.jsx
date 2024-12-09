import React from "react";
import { FiLogIn } from "react-icons/fi"; 
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link
        className="inline-flex items-center rounded-xl border bg-[#7126B5] py-2 px-4 md:py-4 md:px-6 text-sm md:text-base font-medium text-white"
        to={"/login"}
      >
        <FiLogIn className="mr-2" size={18} />
        Masuk
      </Link>
    </div>
  );
};

export default Button;
