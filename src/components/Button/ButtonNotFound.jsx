const Button = ({ type, onAction, children }) => {
    return (
      <button
        type={type || "button"}
        onClick={onAction}
        className="border border-[#7126B5] bg-[#7126B5] text-white px-6 py-3 rounded-md 
                  hover:border-[#7126B5] hover:bg-transparent hover:text-[#7126B5] 
                  transition ease-in-out duration-300"
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  