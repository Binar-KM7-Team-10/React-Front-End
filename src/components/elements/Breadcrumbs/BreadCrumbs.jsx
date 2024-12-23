import React from "react";

const OrderBreadcrumb = ({ text, active }) => {
  return (
    <>
      <div className="flex gap-3 mb-5 font-bold">
        <p className="font-bold">{text}</p>
      </div>
    </>
  );
};

export default OrderBreadcrumb;
