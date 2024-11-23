import React from "react";
import { FiLogIn } from "react-icons/fi"; 

const Button = () => {
  return (
    <div>
      <a
        className="inline-flex items-center rounded-xl border bg-[#7126B5] py-2 px-4 md:py-4 md:px-6 text-sm md:text-base font-medium text-white"
        href="#"
      >
        <FiLogIn className="mr-2" size={18} />
        Masuk
      </a>
    </div>
  );
};

export default Button;
