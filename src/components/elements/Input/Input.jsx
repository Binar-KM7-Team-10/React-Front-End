import { forwardRef } from "react";

const Input = forwardRef(
  ({ type, id, name, placeholder, value, onChange }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        className="w-full rounded-[16px] border-[1.5px] border-gray-200 p-4 mt-2 pe-12 text-sm shadow-sm focus:outline-none focus:border-[#7126B5] focus:ring-[1] focus:ring-[#7126B5]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    );
  }
);

export default Input;
