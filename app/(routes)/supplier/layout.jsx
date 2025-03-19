import React from "react";
import Navbar from "../../../components/supplier/Navbar";
import Image from "next/image";

function SupplierLayout({ children }) {
  return (
    <div className="bg-[#f8fbff]">
      <div className="flex gap-1 mt-3 pl-2 md:pl-4">
        <Image src='/logo.png' alt='logo' width={50} height={45} />
        <h2 className="font-bold text-2xl">SUPPCO</h2>
      </div>
      <div className="flex relative">
      <div className="absolute -top-[65px] md:-top-[30px] right-[40px] md:relative md:left-0 md:flex-1">
      <Navbar />
      </div>
      <div className="flex-[5] max-h-[calc(100vh-55px)] overflow-auto border mt-3 md:rounded-tl-xl bg-white">
      {children}
      </div>
      </div>
    </div>
  );
}

export default SupplierLayout;
