"use client";

import CreateOrderForm from "@/actionForms/orders/CreateOrderForm";
import { Button } from "@/app/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/app/components/ui/dialog";
import UserTable from "@/components/tables/InfoTable";
import { shellEquipmentColumn } from "@/data/columns";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

function CreateOrder({ site, company, supplierProducts, onOpenChange }) {
  const [rows, setRows] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const rows = supplierProducts?.map((obj) => {
      return {
        ...obj,
        id: obj.slug,
      };
    });
    setRows(rows);
  }, [supplierProducts]);
  return (
    <div>
      <div className="flex justify-between items-center gap-5">
      <p>Choose a supplier here</p>
      <button onClick={() => onOpenChange()}>
        <X/>
      </button>
      </div>
      {supplierProducts?.length > 0 ? (
        // <UserTable rows={rows} columns={shellEquipmentColumn} redirectLink="" />
        <table className="w-full mt-3 rounded-lg">
            <thead>
                <tr>
                    <td>Product name</td>
                    <td>Source location</td>
                    <td>Min order quantity</td>
                    <td>Offers delivery</td>
                    <td className="text-right w-[80px]">Action</td>
                </tr>
            </thead>
            <tbody>
               {supplierProducts?.map((product)=>(
                <tr key={product.slug}>
                    <td>{product.product_name}</td>      
                    <td>{product.source_location}</td>      
                    <td>{product.minimum_order_quantity}</td>      
                    <td>{product.offers_delivery ? 'Yes' :'No'}</td>      
                    <td className="text-right">
                    <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="text-blue900 bg-blue-50 border-blue-200"
              >
                Select
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Order this product</DialogTitle>
                <CreateOrderForm
                company={company}
                site={site}
                shellEquipmentRef={product.reference}
                />
              </DialogHeader>
            </DialogContent>
          </Dialog>
                    </td>
                </tr>
               )) }
            </tbody>
        </table>
      ) : (
        <p className="text-center rounded p-2">There are no suppliers.</p>
      )}
    </div>
  );
}

export default CreateOrder;
