import React from "react";

const PaymentBreadcrumb = ({ text1, text2, text3, active }) => {
  return (
    <>
      <div className="flex gap-3 mb-5">
        <span className={`text-sm ${active.text1 ? "font-bold " : ""}`}>
          {text1}
        </span>
        <span className="text-sm"> &gt; </span>
        <span className={`text-sm ${active.text2 ? "font-bold" : ""}`}>
          {text2}
        </span>
        <span className="text-sm"> &gt; </span>
        <span className={`text-sm ${active.text3 ? "font-bold" : ""}`}>
          {text3}
        </span>
      </div>
    </>
  );
};

export default PaymentBreadcrumb;
