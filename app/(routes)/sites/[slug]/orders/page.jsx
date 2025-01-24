"use client";
import React, { useEffect, useState } from "react";
import useAxiosAuth from "@/hooks/useAxiosAuth";
import useUserId from "@/hooks/useUserId";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/accounts";
import Link from "next/link";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import UserTable from "@/components/tables/InfoTable";
import { getOrders } from "@/services/orders";
import useFetchSiteDetail from "@/dataActions/site-equipment/FetchSiteDetail";
import { getSupplierProducts } from "@/services/supplierProducts";
import { ordersColumn } from "@/data/columns";
import { Button } from "@/app/components/ui/button";
import { SquareX } from "lucide-react";

const keysToExclude = ['user', 'company_info', 'slug','paymentType', 'reference', 'site', 'status', 'created_at', 'employees', 'is_fixed', 'is_fixed_fifty', 'is_negotiable', 'id', 'updated_at', 'company','orderSpecifications','shell_equipment_info','shell_equipment'];


function SiteOrders({ params: { slug } }) {
  const axios = useAxiosAuth();
  const [details, setDetails] = useState(null);

  const {
    isLoading: isLoadingOrders,
    data: orders,
    refetch: refetchOrders,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: () => getOrders(axios),
  });

  if (isLoadingOrders) {
    return <SupplierLoadingSpinner />;
  }
  
  const filteredOrderDetails = Object.entries(details || {})?.filter(
    ([key, value]) =>
      value !== "" &&
    value !== null &&
    value !== undefined &&
    value !== false &&
    !keysToExclude.includes(key)
  );

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

  return (
    <div className="pt-4 px-2 md:p-4">
      <section className="mt-5">
      {!details && <div className="flex justify-between my-4">
        <h2 className="font-semibold text-lg md:text-xl">Orders</h2>
          <Button>
            <Link href={`/sites/${slug}/shell`}>Create order</Link>
          </Button>
        </div>}

          {!details && <div>
            {isLoadingOrders ? (
              <SupplierLoadingSpinner />
            ) : orders && orders.length > 0 ? (
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
            {orders?.map((order)=>(
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
      </section>
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
          
        </div>
        }
    </div>
  );
}

export default SiteOrders;
