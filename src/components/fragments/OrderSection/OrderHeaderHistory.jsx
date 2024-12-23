import React from "react";
import Breadcrumbs from "../../elements/Breadcrumbs/BreadCrumbs";
import ButtonHeader from "../../elements/Button/ButtonHeader";

const OrderHeaderHistory = ({ filter, text }) => {
  return (
    <div className="shadow-md py-6 md:py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <Breadcrumbs text={text} />
        <ButtonHeader filter={filter} />
      </div>
    </div>
  );
};

export default OrderHeaderHistory;
