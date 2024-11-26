import React from "react";
import Navbar from "../../../components/supplier/Navbar";

function SupplierLayout({ children }) {
  return (
    <div className="bg-[#f8fbff]">
      <h1 className="font-bold pt-3 px-4">SUPPCO</h1>
      <div className="flex relative">
      <div className="absolute -top-[65px] md:-top-[30px] right-[40px] md:relative md:left-0 md:flex-1">
      <Navbar />
      </div>
      <div className="flex-[5] max-h-[calc(100vh-55px)] border mt-3 md:rounded-tl-xl bg-white">
      {children}
      </div>
      </div>
    </div>
  );
}

export default SupplierLayout;
