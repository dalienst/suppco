"use client";
import { useState } from "react";
import Link from "next/link";
import SupplierLoadingSpinner from "@/components/supplier/LoadingSpinner";
import { Button } from "@/app/components/ui/button";
import { SquareX } from "lucide-react";
import NoResults from "@/components/NoResults";
import { useFetchOrders } from "@/dataActions/orders/ordersActions";

const keysToExclude = ['user', 'company_info', 'slug','paymentType', 'reference', 'site', 'status', 'created_at', 'employees', 'is_fixed', 'is_fixed_fifty', 'is_negotiable', 'id', 'updated_at', 'company','orderSpecifications','shell_equipment_info','shell_equipment'];

function SiteOrders() {
  const {data:orders, isPending:isLoadingOrders} = useFetchOrders()
  const [details, setDetails] = useState(null);
  
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
        <h2 className="font-semibold text-xl">Orders</h2>
          <Button>
            <Link href={`/subcontractor/shell`}>Create order</Link>
          </Button>
        </div>}
          {isLoadingOrders ? 
          <SupplierLoadingSpinner /> 
          :
          (
            <>
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
                <NoResults message='You have not made any orders yet'/>
              )}
            </div>
          }
          </>
          )
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
