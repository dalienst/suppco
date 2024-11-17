import React from "react";
import Navbar from "../../components/supplier/Navbar";

function SupplierLayout({ children }) {
  return (
    <div className="pt-2">
      <Navbar />
      {children}
    </div>
  );
}

export default SupplierLayout;
