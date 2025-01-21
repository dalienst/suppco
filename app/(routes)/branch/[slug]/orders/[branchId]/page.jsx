"use client";

import { useState } from "react";
import { Loader2, SquareX } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import { useFetchBranchOrders } from "@/dataActions/orders/ordersActions";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import { supplierUpdateOrder } from "@/services/orders";
import toast from "react-hot-toast";

const keysToExclude = ['user', 'company_info', 'slug','paymentType', 'reference', 'site', 'status', 'created_at', 'employees', 'is_fixed', 'is_fixed_fifty', 'is_negotiable', 'id', 'updated_at', 'company','orderSpecifications','shell_equipment_info','shell_equipment'];


function BranchOrders({ params }) {
  const [details, setDetails] = useState(null);
  const axios = useAxiosAuth()
  const[accepting, setAccepting] = useState(false);
  const[declining, setDeclining] = useState(false);

  const {
    isLoading: isLoadingBranchOrders,
    data: branchOrders,
    refetch
  } = useFetchBranchOrders(params?.branchId);

    const filteredOrderDetails = Object.entries(details || {})?.filter(
      ([key, value]) =>
        value !== "" &&
      value !== null &&
      value !== undefined &&
      value !== false &&
      !keysToExclude.includes(key)
    );

  if (isLoadingBranchOrders) {
    return <SupplierLoadingSpinner />;
  }

  const formatKey = (key) => {
    return key
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' '); 
  };
  const getFormattedKey = (key) => {
    switch (key) {
      case "is_fixed":
        return "Fixed Payment plan";
      case "is_fixed_fifty":
        return "50-50 Payment plan";
      case "is_negotiable":
        return "Negotiable Payment plan";
      case "is_payment_on_delivery":
        return "Payment on Delivery";
      default:
        return null;
    }
  };

  const handleDecline = async() =>{
    const values = {status:'Declined'}
    setDeclining(true);
    try {
      await supplierUpdateOrder(details?.slug, values, axios);
      toast.success('Order declined')
      refetch()
      setDetails(null)
    } catch(error){
      toast.error('Failed to decline order. Please try again later')
    }finally{
      setDeclining(false);
    }
  }
  const handleAccept = async() =>{
    const values = {status:'Active'}
    setAccepting(true);
    try {
      await supplierUpdateOrder(details?.slug, values, axios);
      toast.success('Order accepted')
      refetch()
      setDetails(null)
    } catch {
      toast.error('Failed to accept order. Please try again later')
    }finally{
      setAccepting(false);
    }
  }

  return (
    <div className="pt-4 px-2 md:p-4">
      <section className="mt-5">
          {!details && <h2 className="font-semibold my-4 text-lg md:text-xl">Orders</h2>}
          {!details && <div>
            {isLoadingBranchOrders ? (
              <SupplierLoadingSpinner />
            ) : branchOrders && branchOrders.length > 0 ? (
              <div className="w-full overflow-auto">
            <table className="w-full min-w-[500px]">
          <thead>
            <tr>
              <td>Ordered by</td>
              <td>Item</td>
              <td>Order reference</td>
              <td>Order status</td>
              <td className="text-center">Action</td>
            </tr>
          </thead>
          <tbody>
            {branchOrders?.map((order)=>(
              <tr key={order.slug}>
              <td>{order?.company_info?.name}</td>
              <td>{order?.shell_equipment_info?.product_name}</td>
              <td>{order?.reference}</td>
              <td className={`${order?.status === 'Active' ? 'text-green-600' : order?.status === 'Declined' ? 'text-red-600' : order?.status === 'Completed' ? 'text-blue-600' : 'text-yellow-500' }`}>{order?.status}</td>
              <td className="text-center">
                <Button onClick={()=>setDetails(order)}>Details</Button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
        </div>
            ) : (
              <p className="text-center text-bg-warning rounded p-2">
                You have no orders yet.
              </p>
            )}
          </div>
        }
        {details && 
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-lg md:text-xl font-semibold">Order details</h2>
            <button onClick={()=>setDetails(null)}>
            <SquareX />
            </button>
          </div>
          <section className="border-y p-2 mt-4 space-y-2">
            <div className="text-lg space-y-2">
              <div className="grid grid-cols-2 bg-slate-100 p-2 gap-2">
                <span className="font-semibold">Ordered by</span>
                <span className="">{details?.company_info?.name}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2">
                <span className="font-semibold">Item</span>
                <span className="">{details?.shell_equipment_info?.product_name}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2">
                <span className="font-semibold">Order reference</span>
                <span className="">{details?.reference}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2">
                <span className="font-semibold">Order status</span>
                <span className="">{details?.status}</span>
              </div>
            </div>
            {filteredOrderDetails?.map((item)=>(
              <div key={item[0]} className="grid grid-cols-2 gap-2 bg-slate-100 p-2 text-lg">
                <span className="font-semibold">{formatKey(item[0])}</span>
                <span>{formatKey(String(item[1]))}</span>
              </div>
            ))}
              <div className="grid grid-cols-2 gap-2 bg-slate-100 p-2 text-lg">
                <span className="font-semibold">Payment type</span>
                <span>{formatKey(getFormattedKey(details?.paymentType))}</span>
              </div>
          </section>
          <div className="mt-5 px-2 flex gap-5 justify-between ">
            <Button variant='destructive' disabled={declining || accepting} onClick={handleDecline}>{declining ? <Loader2 className="animate-spin" /> : 'Decline'}</Button>
            <Button disabled={accepting || declining} onClick={handleAccept}>{accepting ? <Loader2 className="animate-spin" /> : 'Accept'}</Button>
          </div>
        </div>
        }
      </section>
    </div>
  );
}

export default BranchOrders;
