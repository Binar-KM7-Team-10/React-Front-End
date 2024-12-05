import React from "react";
import Breadcrumbs from "../../elements/Breadcrumbs/Breadcrumbs";
import ButtonHeader from "../../elements/Button/ButtonHeader";

const OrderHeaderHistory = () => {
 
  return (
    <div className="shadow-md py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
        <Breadcrumbs
          text1={"Riwayat Pemesanan"}/>
        <ButtonHeader/>
      </div>
    </div>
  );
};

export default OrderHeaderHistory;
