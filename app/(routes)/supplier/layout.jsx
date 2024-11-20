import React from "react";
import Navbar from "../../../components/supplier/Navbar";

function SupplierLayout({ children }) {
  return (
    <div className="bg-[#f8fbff]">
      <h1 className="font-bold pt-2 px-4">SUPPCO</h1>
      <div className="flex relative">
      <div className="absolute -top-[22px] -left-[20px] md:relative md:left-0 md:flex-1">
      <Navbar />
      </div>
      <div className="flex-[5] border mt-4 rounded-tl-xl bg-white">
      {children}
      </div>
      </div>
    </div>
  );
}

export default SupplierLayout;
