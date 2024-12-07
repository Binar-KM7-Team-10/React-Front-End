const Label = ({ children, htmlFor }) => {
    return (
      <>
        <label
          htmlFor={htmlFor}
          className="block text-[12px] font-medium text-slate-700"
        >
          {children}
        </label>
      </>
    );
  };
  export default Label;
  